#!/bin/bash

# ESP32 MQTT Integration Test Script
# Updated for HomeControlHub topic structure

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration - Update these values
MQTT_HOST="localhost"
MQTT_PORT="1884"
DEVICE_TOPIC="topicmqtt/testdevice"
STATUS_TOPIC="$DEVICE_TOPIC/status"
RESPONSE_TOPIC="$DEVICE_TOPIC/response"

# PIDs for monitoring processes
STATUS_PID=""
RESPONSE_PID=""

echo -e "${BLUE}🏠 HomeControlHub ESP32 MQTT Integration Test${NC}"
echo "=================================================="
echo ""

# Function to check if mosquitto-clients is installed
check_mosquitto_clients() {
    if ! command -v mosquitto_pub &> /dev/null; then
        echo -e "${RED}❌ mosquitto-clients not found${NC}"
        echo "Please install mosquitto-clients:"
        echo "  Ubuntu/Debian: sudo apt install mosquitto-clients"
        echo "  macOS: brew install mosquitto"
        exit 1
    fi
    echo -e "${GREEN}✅ mosquitto-clients found${NC}"
}

# Function to check MQTT broker connectivity
check_mqtt_broker() {
    echo -e "${BLUE}🔍 Checking MQTT broker connectivity...${NC}"
    
    # Test basic connectivity
    if mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "test/connection" -m "test" 2>/dev/null; then
        echo -e "${GREEN}✅ MQTT broker is accessible${NC}"
    else
        echo -e "${RED}❌ Cannot connect to MQTT broker${NC}"
        echo "Please ensure:"
        echo "  1. HomeControlHub is running"
        echo "  2. Mosquitto container is started"
        echo "  3. MQTT broker is accessible on $MQTT_HOST:$MQTT_PORT"
        exit 1
    fi
}

# Function to start monitoring
start_monitoring() {
    echo -e "${BLUE}📡 Starting topic monitoring...${NC}"
    
    # Monitor status topic
    mosquitto_sub -h $MQTT_HOST -p $MQTT_PORT -t "$STATUS_TOPIC" > /tmp/esp32_status.log 2>&1 &
    STATUS_PID=$!
    
    # Monitor response topic
    mosquitto_sub -h $MQTT_HOST -p $MQTT_PORT -t "$RESPONSE_TOPIC" > /tmp/esp32_responses.log 2>&1 &
    RESPONSE_PID=$!
    
    sleep 2
    echo -e "${GREEN}✅ Monitoring started (PIDs: $STATUS_PID, $RESPONSE_PID)${NC}"
}

# Function to stop monitoring
stop_monitoring() {
    echo -e "${BLUE}🛑 Stopping topic monitoring...${NC}"
    kill $STATUS_PID 2>/dev/null || true
    kill $RESPONSE_PID 2>/dev/null || true
    echo -e "${GREEN}✅ Monitoring stopped${NC}"
}

# Function to send command and wait for response
send_command() {
    local command_topic="$1"
    local message="$2"
    local description="$3"
    
    echo -e "${YELLOW}📤 Sending command: $description${NC}"
    echo "   Topic: $command_topic"
    echo "   Message: $message"
    
    mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "$command_topic" -m "$message"
    
    echo "   Waiting for response..."
    sleep 3
    
    # Check for response
    if [ -f /tmp/esp32_responses.log ]; then
        local latest_response=$(tail -n 1 /tmp/esp32_responses.log 2>/dev/null)
        if [ ! -z "$latest_response" ]; then
            echo -e "${GREEN}   ✅ Response received: $latest_response${NC}"
        else
            echo -e "${RED}   ❌ No response received${NC}"
        fi
    fi
    echo ""
}

# Function to check status updates
check_status_updates() {
    echo -e "${BLUE}📊 Checking for status updates...${NC}"
    
    if [ -f /tmp/esp32_status.log ]; then
        local status_count=$(wc -l < /tmp/esp32_status.log)
        if [ $status_count -gt 0 ]; then
            echo -e "${GREEN}✅ Found $status_count status update(s)${NC}"
            echo "Latest status:"
            tail -n 1 /tmp/esp32_status.log
        else
            echo -e "${YELLOW}⚠️  No status updates received yet${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  No status log file found${NC}"
    fi
    echo ""
}

# Function for interactive mode
interactive_mode() {
    echo -e "${BLUE}🎮 Interactive Mode${NC}"
    echo "Type commands to send to your ESP32:"
    echo "  on     - Turn device ON"
    echo "  off    - Turn device OFF"
    echo "  toggle - Toggle device state"
    echo "  status - Request device status"
    echo "  quit   - Exit interactive mode"
    echo ""
    
    while true; do
        echo -n -e "${YELLOW}ESP32> ${NC}"
        read -r user_command
        
        case $user_command in
            "on")
                send_command "$DEVICE_TOPIC/command/setPower" '{"state": "ON"}' "Turn ON"
                ;;
            "off")
                send_command "$DEVICE_TOPIC/command/setPower" '{"state": "OFF"}' "Turn OFF"
                ;;
            "toggle")
                send_command "$DEVICE_TOPIC/command/toggle" '{}' "Toggle"
                ;;
            "status")
                send_command "$DEVICE_TOPIC/command/getStatus" '{}' "Get Status"
                ;;
            "quit"|"exit")
                echo "Exiting interactive mode..."
                break
                ;;
            *)
                echo "Unknown command. Type 'quit' to exit."
                ;;
        esac
    done
}

# Function to clean up on exit
cleanup() {
    echo ""
    echo -e "${BLUE}🧹 Cleaning up...${NC}"
    stop_monitoring
    rm -f /tmp/esp32_status.log /tmp/esp32_responses.log
    echo -e "${GREEN}✅ Cleanup complete${NC}"
}

# Set up cleanup on script exit
trap cleanup EXIT

# Main function
main() {
    echo "This script will test MQTT communication with your ESP32 device."
    echo "Make sure your ESP32 is flashed with esp_mqtt_subscriber.ino and connected."
    echo ""
    
    # Preliminary checks
    check_mosquitto_clients
    check_mqtt_broker
    
    # Start monitoring
    start_monitoring
    
    # Wait a moment for monitoring to start
    sleep 2
    
    # Check for existing status updates
    check_status_updates
    
    # Run some basic tests
    echo -e "${BLUE}🧪 Running Basic Tests${NC}"
    echo "Sending test commands to your ESP32..."
    echo ""
    
    # Test 1: Turn device ON
    send_command "$DEVICE_TOPIC/command/setPower" '{"state": "ON"}' "Turn Device ON"
    
    # Test 2: Turn device OFF
    send_command "$DEVICE_TOPIC/command/setPower" '{"state": "OFF"}' "Turn Device OFF"
    
    # Test 3: Toggle device
    send_command "$DEVICE_TOPIC/command/toggle" '{}' "Toggle Device"
    
    # Test 4: Status request
    send_command "$DEVICE_TOPIC/command/getStatus" '{}' "Request device status"
    
    # Check status updates again
    check_status_updates
    
    # Ask if user wants to continue with interactive mode
    echo -e "${YELLOW}Would you like to continue with interactive testing? (y/n): ${NC}"
    read continue_choice
    
    if [[ $continue_choice =~ ^[Yy]$ ]]; then
        interactive_mode
    fi
    
    echo -e "${GREEN}🎉 ESP32 MQTT Integration Test Complete!${NC}"
    echo ""
    echo "Summary:"
    echo "- If you received responses, your ESP32 is working correctly"
    echo "- If you received status updates, the ESP32 is publishing telemetry"
    echo "- Check your ESP32 Serial Monitor for detailed logs"
    echo ""
    echo "Next steps:"
    echo "1. Integrate with HomeControlHub web interface"
    echo "2. Add more sensors/actuators to your ESP32"
    echo "3. Customize the code for your specific use case"
}

# Run main function
main
