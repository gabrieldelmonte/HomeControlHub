#!/bin/bash

# ESP32 MQTT Integration Test Script
# This script tests the MQTT communication with an ESP32 device

echo "🚀 ESP32 MQTT Integration Test for HomeControlHub"
echo "=================================================="

# Configuration
MQTT_HOST="localhost"
MQTT_PORT="1883"
DEVICE_TOPIC="topicmqtt/testdevice"
STATUS_TOPIC="topicmqtt/testdevice/status"
RESPONSE_TOPIC="topicmqtt/testdevice/response"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if mosquitto clients are installed
check_mosquitto_clients() {
    if ! command -v mosquitto_pub &> /dev/null; then
        echo -e "${RED}❌ mosquitto_pub not found${NC}"
        echo "Please install mosquitto clients:"
        echo "  Ubuntu/Debian: sudo apt install mosquitto-clients"
        echo "  macOS: brew install mosquitto"
        exit 1
    fi
    echo -e "${GREEN}✅ mosquitto clients are installed${NC}"
}

# Function to check if MQTT broker is running
check_mqtt_broker() {
    echo -e "${BLUE}🔍 Checking MQTT broker connectivity...${NC}"
    
    if mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "test/connection" -m "test" 2>/dev/null; then
        echo -e "${GREEN}✅ MQTT broker is accessible${NC}"
    else
        echo -e "${RED}❌ Cannot connect to MQTT broker at $MQTT_HOST:$MQTT_PORT${NC}"
        echo "Make sure your HomeControlHub Docker containers are running:"
        echo "  cd src/docker/compose && docker-compose up -d"
        exit 1
    fi
}

# Function to monitor topics in background
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
    local cmd="$1"
    local description="$2"
    
    echo -e "${YELLOW}📤 Sending command: $description${NC}"
    echo "   Topic: $DEVICE_TOPIC"
    echo "   Message: $cmd"
    
    mosquitto_pub -h $MQTT_HOST -p $MQTT_PORT -t "$DEVICE_TOPIC" -m "$cmd"
    
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
        local status_count=$(wc -l < /tmp/esp32_status.log 2>/dev/null || echo "0")
        if [ "$status_count" -gt 0 ]; then
            echo -e "${GREEN}✅ Received $status_count status update(s)${NC}"
            echo "Latest status:"
            tail -n 1 /tmp/esp32_status.log | jq . 2>/dev/null || tail -n 1 /tmp/esp32_status.log
        else
            echo -e "${YELLOW}⚠️  No status updates received yet${NC}"
            echo "ESP32 should send status updates every 30 seconds when connected"
        fi
    else
        echo -e "${RED}❌ Status log file not found${NC}"
    fi
    echo ""
}

# Function to run interactive mode
interactive_mode() {
    echo -e "${BLUE}🎮 Interactive Mode${NC}"
    echo "Available commands:"
    echo "  1) Turn Device ON"
    echo "  2) Turn Device OFF" 
    echo "  3) Toggle Device"
    echo "  4) Request Status"
    echo "  5) Send Custom JSON"
    echo "  6) Send Plain Text"
    echo "  q) Quit"
    echo ""
    
    while true; do
        echo -n -e "${YELLOW}Enter command (1-6, q): ${NC}"
        read choice
        
        case $choice in
            1)
                send_command '{"command":"turn_on","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Turn Device ON"
                ;;
            2)
                send_command '{"command":"turn_off","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Turn Device OFF"
                ;;
            3)
                send_command '{"command":"toggle","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Toggle Device"
                ;;
            4)
                send_command '{"command":"status","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Request Status"
                ;;
            5)
                echo -n "Enter JSON command: "
                read json_cmd
                send_command "$json_cmd" "Custom JSON"
                ;;
            6)
                echo -n "Enter plain text command: "
                read text_cmd
                send_command "$text_cmd" "Plain text"
                ;;
            q)
                break
                ;;
            *)
                echo -e "${RED}Invalid choice. Please enter 1-6 or q.${NC}"
                ;;
        esac
    done
}

# Cleanup function
cleanup() {
    echo -e "\n${BLUE}🧹 Cleaning up...${NC}"
    stop_monitoring
    rm -f /tmp/esp32_status.log /tmp/esp32_responses.log
    echo -e "${GREEN}✅ Cleanup complete${NC}"
}

# Trap for cleanup
trap cleanup EXIT

# Main execution
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
    
    # Test 1: Plain text command
    send_command "on" "Turn Device ON (plain text)"
    
    # Test 2: JSON command
    send_command '{"command":"turn_off","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Turn Device OFF (JSON)"
    
    # Test 3: Status request
    send_command '{"command":"status","deviceId":"testdevice","timestamp":"'$(date -Iseconds)'"}' "Request device status"
    
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
