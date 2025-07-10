#!/bin/bash

# MQTT Broker Testing Script
# This script tests your Mosquitto MQTT broker with simple pub/sub commands

echo "🚀 Testing MQTT Broker Connection..."
echo "======================================="

MQTT_HOST="localhost"
MQTT_PORT="1884"
TEST_TOPIC="homecontrol/test"
TEST_MESSAGE='{"test": "Hello from Home Control Hub!", "timestamp": "'$(date -Iseconds)'"}'

echo "📡 MQTT Broker: $MQTT_HOST:$MQTT_PORT"
echo "📋 Test Topic: $TEST_TOPIC"
echo "💬 Test Message: $TEST_MESSAGE"
echo ""

# Check if mosquitto_pub and mosquitto_sub are available
if ! command -v mosquitto_pub &> /dev/null; then
    echo "❌ mosquitto_pub not found. Installing mosquitto-clients..."
    echo "Run: sudo apt-get install mosquitto-clients (Ubuntu/Debian)"
    echo "Or:  brew install mosquitto (macOS)"
    exit 1
fi

echo "🔍 Testing broker connectivity..."

# Test 1: Simple connection test
echo "Test 1: Connection Test"
timeout 5 mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t $TEST_TOPIC -m "connection_test" -q 1
if [ $? -eq 0 ]; then
    echo "✅ Successfully connected to MQTT broker"
else
    echo "❌ Failed to connect to MQTT broker"
    echo "   Check if Docker container is running: docker ps | grep mosquitto"
    exit 1
fi

echo ""

# Test 2: Subscribe and publish test
echo "Test 2: Pub/Sub Test"
echo "🔵 Starting subscriber in background..."

# Start subscriber in background and capture output
timeout 10 mosquitto_sub -h $MQTT_HOST -p $MQTT_PORT -t $TEST_TOPIC -q 1 > /tmp/mqtt_test_output &
SUB_PID=$!

# Give subscriber time to connect
sleep 2

echo "🟢 Publishing test message..."
mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t $TEST_TOPIC -m "$TEST_MESSAGE" -q 1

# Wait a bit for message delivery
sleep 2

# Kill subscriber
kill $SUB_PID 2>/dev/null

# Check if message was received
if [ -f /tmp/mqtt_test_output ] && grep -q "Hello from Home Control Hub" /tmp/mqtt_test_output; then
    echo "✅ Message successfully received by subscriber"
    echo "📦 Received: $(cat /tmp/mqtt_test_output)"
else
    echo "❌ Message not received by subscriber"
fi

echo ""

# Test 3: Device topic structure test
echo "Test 3: Device Topic Structure Test"
DEVICE_TOPICS=(
    "device/living-room-light/status"
    "device/living-room-light/command/power"
    "device/living-room-light/telemetry"
    "device/kitchen-sensor/heartbeat"
)

for topic in "${DEVICE_TOPICS[@]}"; do
    echo "📤 Testing topic: $topic"
    mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "$topic" -m '{"test": true}' -q 1
    if [ $? -eq 0 ]; then
        echo "   ✅ Published successfully"
    else
        echo "   ❌ Failed to publish"
    fi
done

echo ""

# Test 4: Wildcard subscription test
echo "Test 4: Wildcard Subscription Test"
echo "🔵 Subscribing to device/+/status (wildcard pattern)..."

timeout 5 mosquitto_sub -h $MQTT_HOST -p $MQTT_PORT -t "device/+/status" -q 1 > /tmp/mqtt_wildcard_test &
WILDCARD_PID=$!

sleep 1

echo "🟢 Publishing to multiple device status topics..."
mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "device/light1/status" -m '{"online": true}' -q 1
mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "device/sensor1/status" -m '{"online": true}' -q 1

sleep 2
kill $WILDCARD_PID 2>/dev/null

if [ -f /tmp/mqtt_wildcard_test ] && [ -s /tmp/mqtt_wildcard_test ]; then
    echo "✅ Wildcard subscription working"
    echo "📦 Received messages:"
    cat /tmp/mqtt_wildcard_test | sed 's/^/   /'
else
    echo "❌ Wildcard subscription not working"
fi

echo ""
echo "🎯 MQTT Broker Test Complete!"
echo "======================================="

# Cleanup
rm -f /tmp/mqtt_test_output /tmp/mqtt_wildcard_test

echo "💡 Next steps:"
echo "   1. If tests passed, your MQTT broker is ready!"
echo "   2. Create devices in your Home Control Hub UI"
echo "   3. Use the MQTT terminal to send commands"
echo "   4. Check backend logs for MQTT message handling"
