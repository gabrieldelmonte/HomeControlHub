#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <WiFi.h>

// WiFi credentials - Update these with your network details
const char* ssid = "";
const char* password = "";

// MQTT Broker settings - Update with your HomeControlHub MQTT broker
const char* mqtt_server = "";  // Your broker IP
const int mqtt_port = 1884;
const char* mqtt_user = "";     // No authentication
const char* mqtt_password = ""; // No authentication

// Device configuration - IMPORTANT: This must match the mqttTopic in your device database
const char* device_id = "testdevice";
const char* base_topic = "topicmqtt/testdevice";  // This should match your device's mqttTopic field

// Topic definitions to match HomeControlHub backend expectations
const char* command_topic_pattern = "topicmqtt/testdevice/command/+";  // Subscribe to all command topics
const char* status_topic = "topicmqtt/testdevice/status";     // Where we publish status updates
const char* response_topic = "topicmqtt/testdevice/response"; // Where we publish command responses
const char* heartbeat_topic = "topicmqtt/testdevice/heartbeat"; // For heartbeat messages
const char* telemetry_topic = "topicmqtt/testdevice/telemetry"; // For telemetry data
const char* error_topic = "topicmqtt/testdevice/error";       // For error messages

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
    Serial.print("Device ID: ");
    Serial.println(device_id);
    Serial.print("Base Topic: ");
    Serial.println(base_topic);
    Serial.print("Command Topic Pattern: ");
    Serial.println(command_topic_pattern);

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

    // Send periodic heartbeat and status updates
    unsigned long now = millis();
    if (now - lastHeartbeat > heartbeatInterval) {
        sendHeartbeat();
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

            // Subscribe to command topics with wildcard pattern
            if (client.subscribe(command_topic_pattern)) {
                Serial.print("Successfully subscribed to command topic pattern: ");
                Serial.println(command_topic_pattern);
            }
            else {
                Serial.print("Failed to subscribe to command topic pattern: ");
                Serial.println(command_topic_pattern);
            }

            // Send initial status and heartbeat
            sendStatusUpdate();
            sendHeartbeat();
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

    // Extract command name from topic
    String topicStr = String(topic);
    String commandName = "";
    
    // Check if this is a command topic (e.g., "topicmqtt/testdevice/command/setPower")
    if (topicStr.indexOf("/command/") != -1) {
        commandName = topicStr.substring(topicStr.lastIndexOf("/") + 1);
        Serial.print("Command extracted from topic: ");
        Serial.println(commandName);
    }

    // Process the message
    parseAndHandleMessage(message, commandName);

    Serial.println("============================");
}

void parseAndHandleMessage(String message, String commandFromTopic = "") {
    // Try to parse as JSON first
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
    
    // Look for command in different possible fields
    String command = commandFromTopic; // Use command from topic first
    if (command == "" && doc.containsKey("command")) {
        command = doc["command"].as<String>();
    } else if (command == "" && doc.containsKey("name")) {
        command = doc["name"].as<String>();
    }

    if (command != "") {
        Serial.print("Command: ");
        Serial.println(command);
        handleCommand(command, doc);
    } else {
        Serial.println("No command found in JSON message or topic");
        Serial.println("Available keys:");
        for (JsonPair kv : doc.as<JsonObject>()) {
            Serial.print("  - ");
            Serial.println(kv.key().c_str());
        }
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

    bool stateChanged = false;
    String response = "";

    if (command == "turn_on" || command == "ON" || command == "setPower") {
        // Check if setPower command has state parameter
        if (command == "setPower" && doc.containsKey("payload")) {
            JsonObject payload = doc["payload"];
            if (payload.containsKey("state")) {
                String state = payload["state"].as<String>();
                if (state == "OFF") {
                    Serial.println("Turning OFF via setPower...");
                    response = "Turning OFF...";
                    currentState = OFF;
                    stateChanged = true;
                } else {
                    Serial.println("Turning ON via setPower...");
                    response = "Turning ON...";
                    currentState = ON;
                    stateChanged = true;
                }
            }
        } else {
            Serial.println("Turning ON...");
            response = "Turning ON...";
            currentState = ON;
            stateChanged = true;
        }
    }
    else if (command == "turn_off" || command == "OFF") {
        Serial.println("Turning OFF...");
        response = "Turning OFF...";
        currentState = OFF;
        stateChanged = true;
    }
    else if (command == "toggle") {
        currentState = !currentState;
        response = currentState ? "Turned ON!" : "Turned OFF!";
        Serial.println(response);
        stateChanged = true;
    }
    else if (command == "status" || command == "getStatus") {
        Serial.println("Status requested");
        response = "Status: " + String(currentState ? "ON" : "OFF");
        sendStatusUpdate();  // Send detailed status
    }
    else {
        Serial.println("Unknown command");
        response = "Unknown command: " + command;
        sendCommandResponse(response, false);
        return;
    }

    // Send command response
    sendCommandResponse(response, true);

    // If state changed, send updated status
    if (stateChanged) {
        delay(100); // Small delay before sending status
        sendStatusUpdate();
    }
}

void handlePlainTextCommand(String message) {
    message.toLowerCase();
    message.trim();

    bool stateChanged = false;

    if (message == "on" || message == "turn_on") {
        Serial.println("Turning ON (plain text)...");
        currentState = ON;
        stateChanged = true;
    }
    else if (message == "off" || message == "turn_off") {
        Serial.println("Turning OFF (plain text)...");
        currentState = OFF;
        stateChanged = true;
    }
    else if (message == "toggle") {
        currentState = !currentState;
        Serial.println(currentState ? "Turning ON (plain text)!" : "Turning OFF (plain text)!");
        stateChanged = true;
    }
    else if (message == "status")
        sendStatusUpdate();
    else
        Serial.println("Unknown plain text command!");

    if (stateChanged) {
        sendStatusUpdate();
    }
}

void sendStatusUpdate() {
    if (!client.connected())
        return;

    DynamicJsonDocument doc(512);
    doc["deviceId"] = device_id;
    doc["status"] = currentState;  // boolean status for compatibility
    doc["online"] = true;
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

    DynamicJsonDocument doc(256);
    doc["deviceId"] = device_id;
    doc["response"] = response;
    doc["success"] = success;
    doc["timestamp"] = millis();
    doc["currentState"] = currentState ? "ON" : "OFF";

    String responseMessage;
    serializeJson(doc, responseMessage);

    if (client.publish(response_topic, responseMessage.c_str())) {
        Serial.println("Command response sent:");
        Serial.println(responseMessage);
    }
    else
        Serial.println("Failed to send command response");
}

void sendHeartbeat() {
    if (!client.connected())
        return;

    DynamicJsonDocument doc(256);
    doc["deviceId"] = device_id;
    doc["timestamp"] = millis();
    doc["uptime"] = millis() / 1000;
    doc["status"] = "online";
    doc["wifiRSSI"] = WiFi.RSSI();

    String heartbeatMessage;
    serializeJson(doc, heartbeatMessage);

    if (client.publish(heartbeat_topic, heartbeatMessage.c_str())) {
        Serial.println("Heartbeat sent");
    }
    else
        Serial.println("Failed to send heartbeat");
}
