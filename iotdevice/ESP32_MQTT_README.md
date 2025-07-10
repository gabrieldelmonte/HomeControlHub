# ESP32 MQTT Integration for HomeControlHub

This document provides complete instructions for setting up and using the ESP32 MQTT subscriber with your HomeControlHub system.

## Overview

The `esp_mqtt_subscriber.ino` file contains a complete ESP32 program that:
- Connects to your WiFi network
- Connects to the HomeControlHub MQTT broker (Mosquitto)
- Subscribes to the topic `topicmqtt/testdevice`
- Handles incoming MQTT messages (both JSON and plain text)
- Publishes device status updates and command responses
- Maintains device state and responds to control commands

## Prerequisites

### Hardware
- ESP32 development board (ESP32-DevKitC, NodeMCU-32S, or similar)
- USB cable for programming
- Computer with Arduino IDE

### Software
- Arduino IDE (version 2.0 or later recommended)
- ESP32 board package
- Required libraries (see installation section)

## Installation and Setup

### 1. Install Arduino IDE
Download and install the Arduino IDE from [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)

### 2. Install ESP32 Board Package
1. Open Arduino IDE
2. Go to **File > Preferences**
3. In "Additional Board Manager URLs", add:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
4. Go to **Tools > Board > Boards Manager**
5. Search for "ESP32" and install "esp32 by Espressif Systems"

### 3. Install Required Libraries
Go to **Tools > Manage Libraries** and install:

#### PubSubClient
- Search for "PubSubClient"
- Install "PubSubClient by Nick O'Leary"
- Version: 2.8.0 or later

#### ArduinoJson
- Search for "ArduinoJson"
- Install "ArduinoJson by Benoit Blanchon"
- Version: 6.21.0 or later

#### WiFi Library
The WiFi library is included with the ESP32 board package (no separate installation needed).

### 4. Board Configuration
1. Connect your ESP32 to your computer via USB
2. In Arduino IDE, go to **Tools > Board**
3. Select your ESP32 board (e.g., "ESP32 Dev Module")
4. Set the correct **Port** under **Tools > Port**

## Configuration

### 1. Update WiFi Credentials
Edit the following lines in `esp_mqtt_subscriber.ino`:

```cpp
const char* ssid = "YOUR_WIFI_SSID";        // Replace with your WiFi name
const char* password = "YOUR_WIFI_PASSWORD"; // Replace with your WiFi password
```

### 2. Update MQTT Broker Settings
Edit the following lines to match your HomeControlHub setup:

```cpp
const char* mqtt_server = "192.168.1.100";  // Replace with your broker IP
const int mqtt_port = 1883;                 // Default MQTT port
const char* mqtt_user = "";                 // Leave empty if no auth
const char* mqtt_password = "";             // Leave empty if no auth
```

#### Finding Your MQTT Broker IP:
If your HomeControlHub is running in Docker, find the host machine's IP:
```bash
# On Linux/Mac
hostname -I

# Or check Docker bridge network
docker network inspect bridge
```

### 3. Device Configuration (Optional)
You can customize the device identification:

```cpp
const char* device_id = "testdevice";                    // Device identifier
const char* device_topic = "topicmqtt/testdevice";       // Main topic
const char* status_topic = "topicmqtt/testdevice/status"; // Status updates
```

## Upload and Run

### 1. Compile and Upload
1. Open `esp_mqtt_subscriber.ino` in Arduino IDE
2. Click **Verify** (✓) to compile the code
3. Click **Upload** (→) to flash the ESP32
4. Open **Serial Monitor** (Tools > Serial Monitor) at 115200 baud

### 2. Expected Serial Output
```
HomeControlHub ESP32 MQTT Client Starting...
Connecting to WiFi: YourWiFiName
...........
WiFi connected!
IP address: 192.168.1.150
Signal strength (RSSI): -45 dBm
Attempting MQTT connection... connected!
Client ID: ESP32Client-A4B2
Successfully subscribed to topic: topicmqtt/testdevice
Status update sent:
{"deviceId":"testdevice","status":"online","timestamp":15234,"uptime":15,"freeHeap":295808,"wifiRSSI":-45,"currentState":"OFF","ipAddress":"192.168.1.150"}
ESP32 MQTT Client Ready!
```

## Usage and Testing

### 1. Using the HomeControlHub Interface
Once your ESP32 is connected, you can:
1. Open your HomeControlHub web interface
2. Navigate to the device management section
3. Find or create a device with topic `topicmqtt/testdevice`
4. Send commands through the web interface

### 2. Direct MQTT Testing
You can test directly using MQTT client tools:

#### Install mosquitto-clients:
```bash
# Ubuntu/Debian
sudo apt install mosquitto-clients

# macOS
brew install mosquitto
```

#### Send Commands:
```bash
# Turn device on
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m '{"command":"turn_on","deviceId":"testdevice","timestamp":"2024-01-01T12:00:00Z"}'

# Turn device off
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m '{"command":"turn_off","deviceId":"testdevice","timestamp":"2024-01-01T12:00:00Z"}'

# Toggle device state
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m '{"command":"toggle","deviceId":"testdevice","timestamp":"2024-01-01T12:00:00Z"}'

# Request status
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m '{"command":"status","deviceId":"testdevice","timestamp":"2024-01-01T12:00:00Z"}'

# Plain text commands also work
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m "on"
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m "off"
mosquitto_pub -h localhost -p 1883 -t "topicmqtt/testdevice" -m "toggle"
```

#### Monitor Responses:
```bash
# Monitor device responses
mosquitto_sub -h localhost -p 1883 -t "topicmqtt/testdevice/response"

# Monitor device status updates
mosquitto_sub -h localhost -p 1883 -t "topicmqtt/testdevice/status"

# Monitor all device topics
mosquitto_sub -h localhost -p 1883 -t "topicmqtt/testdevice/+"
```

## Supported Commands

### JSON Commands
The ESP32 supports the following JSON commands:

```json
{
  "command": "turn_on",
  "deviceId": "testdevice",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

Available commands:
- `turn_on` or `ON` - Turn device on
- `turn_off` or `OFF` - Turn device off
- `toggle` - Toggle device state
- `status` - Request device status

### Plain Text Commands
The ESP32 also accepts simple text commands:
- `on` or `turn_on`
- `off` or `turn_off`
- `toggle`
- `status`

## Message Flow

### 1. Command Messages
**Topic:** `topicmqtt/testdevice`
**Direction:** HomeControlHub → ESP32
**Format:** JSON or plain text

### 2. Response Messages
**Topic:** `topicmqtt/testdevice/response`
**Direction:** ESP32 → HomeControlHub
**Format:** JSON

Example response:
```json
{
  "deviceId": "testdevice",
  "response": "Turning ON...",
  "success": true,
  "timestamp": 15234
}
```

### 3. Status Updates
**Topic:** `topicmqtt/testdevice/status`
**Direction:** ESP32 → HomeControlHub (every 30 seconds)
**Format:** JSON

Example status:
```json
{
  "deviceId": "testdevice",
  "status": "online",
  "timestamp": 15234,
  "uptime": 15,
  "freeHeap": 295808,
  "wifiRSSI": -45,
  "currentState": "OFF",
  "ipAddress": "192.168.1.150"
}
```

## Troubleshooting

### WiFi Connection Issues
- Verify SSID and password are correct
- Check if WiFi network is 2.4GHz (ESP32 doesn't support 5GHz)
- Ensure WiFi signal strength is adequate

### MQTT Connection Issues
- Verify MQTT broker IP address
- Check if port 1883 is accessible
- Ensure Mosquitto container is running: `docker ps`
- Test MQTT broker connectivity: `mosquitto_pub -h [BROKER_IP] -p 1883 -t "test" -m "hello"`

### ESP32 Reset/Reboot Issues
- Check power supply stability
- Verify USB cable quality
- Monitor Serial output for error messages

### No Response to Commands
- Verify the ESP32 is subscribed to the correct topic
- Check Serial Monitor for incoming messages
- Test with simple plain text commands first
- Ensure JSON format is valid

## Extending the Code

The ESP32 code is designed to be easily extensible. You can:

1. **Add more GPIO controls:** Connect relays, sensors, or other peripherals
2. **Implement more commands:** Add custom commands for your specific use case
3. **Add sensors:** Publish sensor data to status updates
4. **Multiple device support:** Modify to handle multiple topics/devices
5. **Over-the-Air updates:** Add OTA functionality for remote updates

## Integration with HomeControlHub Backend

The ESP32 is fully compatible with your HomeControlHub backend. The backend will:
- Automatically subscribe to device topics when devices are created
- Route commands from the web interface to the appropriate MQTT topics
- Receive and process status updates and responses
- Handle device state management

## Security Considerations

For production use, consider:
- Using MQTT with TLS/SSL (port 8883)
- Implementing MQTT authentication
- Using strong WiFi passwords
- Updating ESP32 firmware regularly
- Implementing device authentication tokens

## Next Steps

1. Upload the code to your ESP32
2. Test basic functionality with MQTT commands
3. Integrate with your HomeControlHub web interface
4. Customize the code for your specific hardware setup
5. Add additional sensors or actuators as needed
