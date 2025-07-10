#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <WiFi.h>

// WiFi credentials - Update these with your network details
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// MQTT Broker settings - Update with your HomeControlHub MQTT broker
const char* mqtt_server = "";  // Replace with your broker IP
const int mqtt_port = 1884;
const char* mqtt_user = "";     // No authentication
const char* mqtt_password = ""; // No authentication

// Device configuration
const char* device_id = "testdevice";
const char* device_topic = "topicmqtt/testdevice";
const char* status_topic = "topicmqtt/testdevice/status";

// Device state
#define OFF 0
#define ON 1
int currentState = OFF;

WiFiClient espClient;
PubSubClient client(espClient);

unsigned long lastHeartbeat = 0;
const unsigned long heartbeatInterval = 30000; // 30 seconds

void setup() {
    Serial.begin(115200);
    delay(1000);

    Serial.println("HomeControlHub ESP32 MQTT Client Starting...");

    // Connect to WiFi
    setup_wifi();

    // Configure MQTT
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);

    // Connect to MQTT broker
    connectToMQTT();

    Serial.println("ESP32 MQTT Client Ready!");
}

void loop() {
    if (!client.connected())
        connectToMQTT();
    client.loop();

    // Send periodic status updates
    unsigned long now = millis();
    if (now - lastHeartbeat > heartbeatInterval) {
        sendStatusUpdate();
        lastHeartbeat = now;
    }

    delay(100);
}

void setup_wifi() {
    delay(10);
    Serial.println();
    Serial.print("Connecting to WiFi: ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 30) {
        delay(500);
        Serial.print(".");
        attempts++;
    }

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("");
        Serial.println("WiFi connected!");
        Serial.print("IP address: ");
        Serial.println(WiFi.localIP());
        Serial.print("Signal strength (RSSI): ");
        Serial.print(WiFi.RSSI());
        Serial.println(" dBm");
    }
    else {
        Serial.println("");
        Serial.println("Failed to connect to WiFi. Please check credentials.");
        while(1)
            delay(1000); // Halt execution
    }
}

void connectToMQTT() {
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");

        // Create a unique client ID
        String clientId = "ESP32Client-";
        clientId += String(random(0xffff), HEX);

        // Attempt to connect
        bool connected = false;
        if (strlen(mqtt_user) > 0)
            connected = client.connect(clientId.c_str(), mqtt_user, mqtt_password);
        else
            connected = client.connect(clientId.c_str());

        if (connected) {
            Serial.println(" connected!");
            Serial.print("Client ID: ");
            Serial.println(clientId);

            // Subscribe to the device topic
            if (client.subscribe(device_topic)) {
                Serial.print("Successfully subscribed to topic: ");
                Serial.println(device_topic);
            }
            else {
                Serial.print("Failed to subscribe to topic: ");
                Serial.println(device_topic);
            }

            // Send initial status
            sendStatusUpdate();
        }
        else {
            Serial.print(" failed, rc=");
            Serial.print(client.state());
            Serial.println(" retrying in 5 seconds");
            delay(5000);
        }
    }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.println("=== MQTT Message Received ===");
    Serial.print("Topic: ");
    Serial.println(topic);
    Serial.print("Payload: ");

    // Convert payload to string
    String message = "";

    for (int i = 0; i < length; i++)
    message += (char)payload[i];

    Serial.println(message);
    Serial.print("Length: ");
    Serial.println(length);

    // Parse JSON message if possible
    parseAndHandleMessage(message);

    Serial.println("============================");
}

void parseAndHandleMessage(String message) {
    // Parse JSON message
    DynamicJsonDocument doc(1024);
    DeserializationError error = deserializeJson(doc, message);

    if (error) {
        Serial.print("JSON parsing failed: ");
        Serial.println(error.c_str());
        Serial.println("Treating as plain text message");
        handlePlainTextCommand(message);
        return;
    }

    // Handle JSON message
    Serial.println("--- Parsed JSON Message ---");
    if (doc.containsKey("command")) {
        String command = doc["command"];
        Serial.print("Command: ");
        Serial.println(command);
        handleCommand(command, doc);
    }

    if (doc.containsKey("deviceId")) {
        String deviceId = doc["deviceId"];
        Serial.print("Device ID: ");
        Serial.println(deviceId);
    }

    if (doc.containsKey("timestamp")) {
        String timestamp = doc["timestamp"];
        Serial.print("Timestamp: ");
        Serial.println(timestamp);
    }

    if (doc.containsKey("payload")) {
        JsonObject payloadObj = doc["payload"];
        Serial.println("Payload data:");
        serializeJsonPretty(payloadObj, Serial);
        Serial.println();
    }
}

void handleCommand(String command, DynamicJsonDocument& doc) {
    Serial.print("Executing command: ");
    Serial.println(command);

    if (command == "turn_on" || command == "ON") {
        Serial.println("Turning ON...");
        sendCommandResponse("Turning ON...", true);
        currentState = ON;
    }
    else if (command == "turn_off" || command == "OFF") {
        Serial.println("Turning OFF...");
        sendCommandResponse("Turning OFF...", true);
        currentState = OFF;
    }
    else if (command == "toggle") {
        Serial.print("Toggling state, current state: ");
        Serial.println(!currentState ? "ON" : "OFF");
        String response = !currentState ? "Turning ON!" : "Turning OFF!";
        Serial.println(response);
        sendCommandResponse(response, true);
        currentState = !currentState;
    }
    else if (command == "status")
        sendStatusUpdate();
    else {
        Serial.println("Unknown command");
        sendCommandResponse("Unknown command: " + command, false);
    }
}

void handlePlainTextCommand(String message) {
    message.toLowerCase();
    message.trim();

    if (message == "on" || message == "turn_on") {
        Serial.println("Turning ON (plain text)...");
        currentState = ON;
    }
    else if (message == "off" || message == "turn_off") {
        Serial.println("Turning OFF (plain text)...");
        currentState = OFF;
    }
    else if (message == "toggle") {
        currentState = !currentState;
        Serial.println(currentState ? "Turning ON (plain text)!" : "Turning OFF (plain text)!");
    }
    else if (message == "status")
        sendStatusUpdate();
    else
        Serial.println("Unknown plain text command!");
}

void sendStatusUpdate() {
    if (!client.connected())
    return;

    DynamicJsonDocument doc(512);
    doc["deviceId"] = device_id;
    doc["status"] = "online";
    doc["timestamp"] = millis();
    doc["uptime"] = millis() / 1000;
    doc["freeHeap"] = ESP.getFreeHeap();
    doc["wifiRSSI"] = WiFi.RSSI();
    doc["currentState"] = currentState ? "ON" : "OFF";
    doc["ipAddress"] = WiFi.localIP().toString();

    String statusMessage;
    serializeJson(doc, statusMessage);

    if (client.publish(status_topic, statusMessage.c_str())) {
        Serial.println("Status update sent:");
        Serial.println(statusMessage);
    }
    else
        Serial.println("Failed to send status update");
}

void sendCommandResponse(String response, bool success) {
    if (!client.connected())
        return;

    String responseTopic = String(device_topic) + "/response";

    DynamicJsonDocument doc(256);
    doc["deviceId"] = device_id;
    doc["response"] = response;
    doc["success"] = success;
    doc["timestamp"] = millis();

    String responseMessage;
    serializeJson(doc, responseMessage);

    if (client.publish(responseTopic.c_str(), responseMessage.c_str())) {
        Serial.println("Command response sent:");
        Serial.println(responseMessage);
    }
    else
        Serial.println("Failed to send command response");
}
