# MQTT Topic Examples for Home Control Hub Devices

## Topic Structure

Each device should use a unique base topic following this pattern:
```
device/{device-name}/{message-type}
```

### Example Device Topics:

#### Living Room Light
- **Base Topic**: `device/living-room-light`
- **Status Updates**: `device/living-room-light/status`
- **Commands**: `device/living-room-light/command/{command-name}`
- **Telemetry**: `device/living-room-light/telemetry`
- **Heartbeat**: `device/living-room-light/heartbeat`
- **Responses**: `device/living-room-light/response`
- **Errors**: `device/living-room-light/error`

#### Kitchen Temperature Sensor
- **Base Topic**: `device/kitchen-temp-sensor`
- **Status**: `device/kitchen-temp-sensor/status`
- **Telemetry**: `device/kitchen-temp-sensor/telemetry`
- **Heartbeat**: `device/kitchen-temp-sensor/heartbeat`

#### Garage Door Controller
- **Base Topic**: `device/garage-door`
- **Status**: `device/garage-door/status`
- **Commands**: `device/garage-door/command/open`, `device/garage-door/command/close`
- **Responses**: `device/garage-door/response`

## Message Formats

### Status Updates (Device → Hub)
```json
{
  "online": true,
  "status": true,
  "timestamp": "2024-12-10T15:30:00Z"
}
```

### Command Messages (Hub → Device)
```json
{
  "name": "setPower",
  "payload": {
    "power": true,
    "brightness": 80
  }
}
```

### Telemetry Data (Device → Hub)
```json
{
  "temperature": 22.5,
  "humidity": 45.2,
  "battery": 85,
  "timestamp": "2024-12-10T15:30:00Z"
}
```

### Heartbeat (Device → Hub)
```json
{
  "alive": true,
  "uptime": 3600,
  "timestamp": "2024-12-10T15:30:00Z"
}
```

## Testing Commands

### Test Device Creation via API:
```bash
curl -X POST http://localhost:8080/api/v1/devices \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Living Room Light",
    "type": "smart_light",
    "description": "Main living room ceiling light",
    "location": "Living Room",
    "mqttTopic": "device/living-room-light",
    "aesKey": "your-32-character-aes-key-here123"
  }'
```

### Test MQTT Command via Terminal:
```bash
# Simulate device status update
mosquitto_pub -h localhost -p 1884 \
  -t "device/living-room-light/status" \
  -m '{"online": true, "status": true, "timestamp": "2024-12-10T15:30:00Z"}'

# Simulate device telemetry
mosquitto_pub -h localhost -p 1884 \
  -t "device/living-room-light/telemetry" \
  -m '{"brightness": 75, "energy": 12.5, "timestamp": "2024-12-10T15:30:00Z"}'
```

### Subscribe to All Device Messages:
```bash
# Monitor all device messages
mosquitto_sub -h localhost -p 1884 -t "device/+/+"

# Monitor only status updates
mosquitto_sub -h localhost -p 1884 -t "device/+/status"

# Monitor commands sent to devices
mosquitto_sub -h localhost -p 1884 -t "device/+/command/+"
```

## Security Notes

1. **Encryption**: All messages are encrypted using AES-256-GCM with device-specific keys
2. **Authentication**: Only authenticated users can create/manage devices
3. **Topic Validation**: The system validates topic ownership before allowing operations

## Troubleshooting

### Check MQTT Broker Status:
```bash
docker ps | grep mosquitto
docker logs mosquitto_broker
```

### Check Backend MQTT Connection:
```bash
# Look for MQTT connection logs in application output
docker logs homecontrol-app | grep MQTT
```

### Verify Topic Subscriptions:
```bash
# Check what topics are being subscribed to
# This should appear in your backend logs when devices are created
```
