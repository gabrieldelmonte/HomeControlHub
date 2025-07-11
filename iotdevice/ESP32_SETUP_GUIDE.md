# ESP32 Integration with HomeControlHub

## Overview

This guide explains how to integrate your ESP32 device with the HomeControlHub system. The ESP32 will communicate with the hub using MQTT protocol with encrypted messages.

## Updated Topic Structure

The HomeControlHub backend uses the following topic structure:

### Commands (Hub → ESP32)
- **Topic Pattern**: `{device.mqttTopic}/command/{commandName}`
- **Example**: `topicmqtt/testdevice/command/setPower`

### Status Updates (ESP32 → Hub)
- **Topic**: `{device.mqttTopic}/status`
- **Example**: `topicmqtt/testdevice/status`

### Command Responses (ESP32 → Hub)
- **Topic**: `{device.mqttTopic}/response`
- **Example**: `topicmqtt/testdevice/response`

### Heartbeat (ESP32 → Hub)
- **Topic**: `{device.mqttTopic}/heartbeat`
- **Example**: `topicmqtt/testdevice/heartbeat`

## Setup Instructions

### 1. Hardware Requirements
- ESP32 development board
- USB cable for programming
- Arduino IDE installed

### 2. Required Libraries
Install these libraries in Arduino IDE:
- **PubSubClient** by Nick O'Leary
- **ArduinoJson** by Benoit Blanchon

### 3. Configuration

#### WiFi Settings
```cpp
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
```

#### MQTT Broker Settings
```cpp
const char* mqtt_server = "YOUR_BROKER_IP";  // HomeControlHub MQTT broker
const int mqtt_port = 1884;
```

#### Device Configuration
```cpp
const char* device_id = "your_device_id";  // Must match device ID in database
const char* base_topic = "topicmqtt/your_device_id";  // Must match mqttTopic in database
```

### 4. Device Registration

Before the ESP32 can communicate, you need to register it in the HomeControlHub:

#### Via Web Interface
1. Log into HomeControlHub
2. Go to Device Management
3. Add a new device with:
   - **Name**: Your device name (e.g., "Living Room Light")
   - **Type**: Device type (e.g., "smart_light")
   - **Location**: Device location (e.g., "Living Room")
   - **MQTT Topic**: Must match `base_topic` in ESP32 code
   - **AES Key**: 32-character encryption key

#### Via API
```bash
curl -X POST http://localhost:8080/api/v1/devices \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ESP32 Test Device",
    "type": "smart_light",
    "description": "ESP32 test device",
    "location": "Test Room",
    "mqttTopic": "topicmqtt/testdevice",
    "aesKey": "your-32-character-aes-key-here123"
  }'
```

### 5. Upload Code
1. Open `esp_mqtt_subscriber.ino` in Arduino IDE
2. Update WiFi and MQTT settings
3. Upload to your ESP32
4. Open Serial Monitor (115200 baud)

## Testing the Integration

### 1. Basic Connectivity Test
```bash
# Monitor ESP32 status updates
mosquitto_sub -h localhost -p 1884 -t "topicmqtt/testdevice/status"

# Monitor ESP32 responses
mosquitto_sub -h localhost -p 1884 -t "topicmqtt/testdevice/response"
```

### 2. Send Test Commands
```bash
# Turn device ON
mosquitto_pub -h localhost -p 1884 -t "topicmqtt/testdevice/command/setPower" \
  -m '{"state": "ON"}'

# Turn device OFF
mosquitto_pub -h localhost -p 1884 -t "topicmqtt/testdevice/command/setPower" \
  -m '{"state": "OFF"}'

# Toggle device
mosquitto_pub -h localhost -p 1884 -t "topicmqtt/testdevice/command/toggle" \
  -m '{}'
```

### 3. Web Interface Testing
1. Open HomeControlHub web interface
2. Navigate to your device
3. Use the MQTT terminal to send commands
4. Monitor device status updates

## Supported Commands

### Power Commands
- `setPower` - Set device power state
  ```json
  {"state": "ON"}  // or "OFF"
  ```
- `toggle` - Toggle device state
  ```json
  {}
  ```

### Status Commands
- `getStatus` - Request device status
  ```json
  {}
  ```

## Message Encryption

All messages are encrypted using AES-256-GCM. The ESP32 code handles:
- **Incoming messages**: Decryption using device-specific AES key
- **Outgoing messages**: Encryption before publishing

## Troubleshooting

### Common Issues

#### 1. ESP32 Not Connecting to WiFi
- Verify SSID and password
- Check WiFi signal strength
- Ensure 2.4GHz network (ESP32 doesn't support 5GHz)

#### 2. MQTT Connection Failed
- Verify broker IP address and port
- Check if Mosquitto container is running
- Test broker connectivity: `mosquitto_pub -h [BROKER_IP] -p 1884 -t "test" -m "hello"`

#### 3. No Response to Commands
- Verify device is registered in HomeControlHub
- Check MQTT topic matches exactly
- Monitor Serial output for errors
- Verify AES key matches device registration

#### 4. Device Not Found in Web Interface
- Ensure device is registered with correct `mqttTopic`
- Check user permissions (device ownership)
- Verify MQTT service is running

### Debug Commands

#### Check MQTT Broker Status
```bash
docker ps | grep mosquitto
docker logs mosquitto_broker
```

#### Monitor All Device Topics
```bash
mosquitto_sub -h localhost -p 1884 -t "topicmqtt/+/+"
```

#### Test MQTT Connectivity
```bash
mosquitto_pub -h localhost -p 1884 -t "test/topic" -m "test message"
mosquitto_sub -h localhost -p 1884 -t "test/topic"
```

## Extending the Code

### Adding New Commands
1. Add command handler in `handleCommand()` function
2. Update command logic
3. Send appropriate response

### Adding Sensors/Actuators
1. Define GPIO pins
2. Add sensor reading functions
3. Publish telemetry data
4. Handle sensor-specific commands

### Example: Adding LED Control
```cpp
#define LED_PIN 2

void setup() {
    pinMode(LED_PIN, OUTPUT);
    // ... existing setup code
}

void handleCommand(String command, DynamicJsonDocument& doc) {
    if (command == "setBrightness") {
        int brightness = doc["payload"]["brightness"] | 50;
        analogWrite(LED_PIN, map(brightness, 0, 100, 0, 255));
        // ... rest of handler
    }
    // ... existing commands
}
```

## Security Notes

- **AES Keys**: Each device has a unique 32-character AES key
- **Topic Isolation**: Devices can only access their designated topics
- **Message Encryption**: All MQTT messages are encrypted
- **Authentication**: Only authenticated users can send commands

## Performance Tips

- **Heartbeat Interval**: 30 seconds (adjustable)
- **Status Updates**: Sent with heartbeat
- **Memory Management**: Uses ArduinoJson for efficient JSON handling
- **WiFi Reconnection**: Automatic reconnection on connection loss
- **MQTT Reconnection**: Automatic reconnection with exponential backoff 
