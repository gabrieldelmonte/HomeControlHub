# HomeControlHub 🏠🎛️

A comprehensive IoT home automation platform that enables centralized control and monitoring of smart devices through a modern web interface, robust backend API, and MQTT communication protocol.

## 🌟 Overview

HomeControlHub is a full-stack home automation solution designed to provide seamless integration between IoT devices and a centralized control system. The platform supports real-time device management, automation rules, user authentication, and secure MQTT communication with end-to-end encryption.

### Key Features

- 🔐 **Secure Authentication & Authorization** - JWT-based authentication with role-based access control
- 📱 **Modern Web Interface** - Responsive React-based dashboard for device management
- 🔗 **MQTT Integration** - Real-time communication with IoT devices using encrypted MQTT messaging
- 🤖 **Automation Engine** - Create and manage automation rules for smart device interactions
- 📊 **Real-time Monitoring** - Live device status updates and telemetry data
- 🛡️ **Data Security** - AES-256-GCM encryption for all device communications
- 📈 **Scalable Architecture** - Microservices-based backend with PostgreSQL database
- 🐳 **Docker Support** - Complete containerized deployment with Docker Compose
- 📋 **API Documentation** - Comprehensive Swagger/OpenAPI documentation
- 🔧 **ESP32 Integration** - Ready-to-use Arduino code for ESP32 devices

## 🏗️ Project Structure

```
HomeControlHub/
├── src/                        # Backend application
│   ├── code/                   # Core business logic
│   │   ├── application.ts      # Express application setup
│   │   ├── controllers.ts      # API route controllers
│   │   ├── entities.ts         # Domain entities and models
│   │   ├── infrastructure.ts   # Database, logging, configuration
│   │   ├── middlewares.ts      # Authentication and validation
│   │   ├── repositories.ts     # Data access layer
│   │   ├── services.ts         # Business logic services
│   │   ├── routes/             # API route definitions
│   │   └── swagger/            # API documentation
│   ├── db/                     # Database configuration
│   │   └── prisma/             # Prisma ORM schema and migrations
│   ├── docker/                 # Docker configuration
│   ├── ui/                     # Frontend React application
│   │   └── src/components/     # React components
│   └── tests/                  # Test scripts and utilities
├── iotdevice/                  # ESP32/Arduino device code
│   ├── main/                   # ESP32 main application
│   ├── esp_mqtt_subscriber.ino # Arduino IDE compatible code
│   └── ESP32_MQTT_README.md    # Device setup documentation
└── docs/                       # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Docker & Docker Compose** (recommended for easy setup)
- **Node.js 18+** (for development)
- **PostgreSQL** (if running without Docker)
- **Arduino IDE** (for ESP32 development)

### 1. Clone and Setup

```bash
git clone <repository-url>
cd HomeControlHub
```

### 2. Environment Configuration

Create environment file:
```bash
cd src
cp .env.example .env
```

Configure your `.env` file:
```env
# Database
DATABASE_URL="postgresql://homecontrolhub:password@localhost:5432/homecontrolhub_db"

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key-here"

# MQTT Configuration
MQTT_BROKER_URL="mqtt://localhost:1883"
MQTT_USERNAME=""
MQTT_PASSWORD=""

# Application Ports
BACKEND_PORT=8080
FRONTEND_PORT=9877
SWAGGER_PORT=3000
```

### 3. Deploy with Docker (Recommended)

```bash
cd src/docker/compose
docker-compose up -d
```

This will start:
- **PostgreSQL Database** (port 5432)
- **Mosquitto MQTT Broker** (port 1883)
- **Backend API Server** (port 8080)
- **Frontend Web Interface** (port 9877)
- **Swagger Documentation** (port 3000)

### 4. Access the Application

- **Web Interface**: http://localhost:9877
- **API Documentation**: http://localhost:3000
- **Backend API**: http://localhost:8080

### 5. Initial Setup

1. Register a new user account through the web interface
2. Create your first device in the dashboard
3. Set up automation rules as needed

## 🎯 Backend Architecture

### Core Services

#### 🔐 Authentication Service
- JWT token generation and validation
- Password hashing with bcrypt
- Role-based access control (Admin, Standard User, Guest)
- Session management

#### 📡 MQTT Service
- Secure device communication with AES-256-GCM encryption
- Automatic topic subscription management
- Real-time message handling
- Device status monitoring and heartbeat detection

#### 🤖 Automation Service
- Rule-based automation engine
- Trigger condition evaluation
- Command execution and scheduling
- Event-driven device interactions

#### 🔧 Device Service
- Device lifecycle management
- Status monitoring and control
- Command queuing and execution
- Telemetry data collection

### API Endpoints

#### Authentication
```
POST /api/v1/auth/register # User registration
POST /api/v1/auth/login    # User authentication
POST /api/v1/auth/logout   # Session termination
```

#### Device Management
```
GET    /api/v1/devices     # List user devices
POST   /api/v1/devices     # Create new device
GET    /api/v1/devices/:id # Get device details
PUT    /api/v1/devices/:id # Update device
DELETE /api/v1/devices/:id # Remove device
```

#### Automation
```
GET    /api/v1/automation/rules                # List automation rules
POST   /api/v1/automation/rules                # Create automation rule
PUT    /api/v1/automation/rules/:id            # Update rule
DELETE /api/v1/automation/rules/:id            # Delete rule
POST   /api/v1/automation/devices/:id/commands # Send device command
```

#### User Management
```
GET    /api/v1/users/profile # Get user profile
PUT    /api/v1/users/profile # Update profile
GET    /api/v1/users/devices # Get user's devices
```

### Database Schema

The application uses PostgreSQL with Prisma ORM for data management:

- **Users**: Authentication and profile management
- **Devices**: IoT device registration and metadata
- **Commands**: Device command history and queuing
- **AutomationRules**: Automation logic and triggers
- **Notifications**: User alerts and system messages
- **SystemLogs**: Audit trail and debugging information

## 🎨 Frontend Architecture

### Technology Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Styled Components** for styling
- **Vite** for build tooling
- **React Icons** for UI icons

### Components Overview

#### 🏠 Dashboard
- Device overview and status monitoring
- Quick device controls
- System status indicators
- Recent activity feed

#### 🔧 Device Management
- Add/edit/remove devices
- Device configuration and settings
- Real-time status updates
- Command execution interface

#### 🤖 Automation Rules
- Visual rule builder
- Trigger condition setup
- Action configuration
- Rule testing and validation

#### 👤 User Profile
- Account settings and preferences
- Security settings
- Device access permissions
- Usage statistics

### Key Features

- **Responsive Design** - Mobile-friendly interface
- **Real-time Updates** - Live device status and notifications
- **Intuitive Controls** - Easy device management and automation setup
- **Secure Access** - JWT-based authentication throughout
- **Modern UI** - Clean, professional design with dark/light theme support

### Building and Development

```bash
# Development mode
cd src
npm run dev

# Production build
npm run build
npm run start

# UI-only development
npm run dev:ui

# UI production build
npm run build:ui
```

## 📡 MQTT Communication

### Topic Structure

The system uses a hierarchical topic structure for organized device communication:

```
topicmqtt/{device-id}/ # Base device topic
├── status             # Device status updates
├── telemetry          # Sensor data and metrics
├── heartbeat          # Connectivity monitoring
├── response           # Command acknowledgments
└── error              # Error reporting
```

### Message Flow

#### 1. Device Status Updates
```json
{
  "deviceId": "esp32_device_01",
  "status": "online",
  "timestamp": "2024-01-01T12:00:00Z",
  "uptime": 3600,
  "freeHeap": 295808,
  "wifiRSSI": -45,
  "currentState": "ON",
  "ipAddress": "192.168.1.150"
}
```

#### 2. Command Messages
```json
{
  "command": "turn_on",
  "deviceId": "esp32_device_01",
  "timestamp": "2024-01-01T12:00:00Z",
  "payload": {
    "brightness": 80,
    "duration": 3600
  }
}
```

#### 3. Telemetry Data
```json
{
  "temperature": 22.5,
  "humidity": 45.2,
  "battery": 85,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Security Features

- **AES-256-GCM Encryption** - All device messages are encrypted
- **Device-Specific Keys** - Unique encryption keys per device
- **Message Authentication** - Cryptographic integrity verification
- **Topic Access Control** - Devices can only access their designated topics

## 🔧 ESP32 Device Integration

The project includes complete ESP32 integration support with ready-to-use Arduino code.

### Supported Features

- ✅ **WiFi Connectivity** - Automatic connection and reconnection
- ✅ **MQTT Communication** - Encrypted messaging with the hub
- ✅ **Command Processing** - JSON and plain text command support
- ✅ **Status Reporting** - Periodic status updates and telemetry
- ✅ **Error Handling** - Robust error handling and recovery
- ✅ **LED Control** - Built-in LED control for testing

### Quick ESP32 Setup

1. **Hardware Requirements**
   - ESP32 development board
   - USB cable for programming
   - Arduino IDE installed

2. **Software Setup**
   ```bash
   # Install required libraries in Arduino IDE:
   # - PubSubClient (by Nick O'Leary)
   # - ArduinoJson (by Benoit Blanchon)
   # - WiFi (included with ESP32 package)
   ```

3. **Configuration**
   Edit the configuration in `iotdevice/esp_mqtt_subscriber.ino`:
   ```cpp
   const char* ssid = "YOUR_WIFI_SSID";
   const char* password = "YOUR_WIFI_PASSWORD";
   const char* mqtt_server = "192.168.1.100";  // Your hub IP
   const char* device_id = "testdevice";
   ```

4. **Upload and Test**
   - Upload the code to your ESP32
   - Monitor Serial output for connection status
   - Test commands through the web interface

### Supported Commands

The ESP32 code supports both JSON and plain text commands:

**JSON Commands:**
```json
{"command": "turn_on", "deviceId": "testdevice"}
{"command": "turn_off", "deviceId": "testdevice"}
{"command": "toggle", "deviceId": "testdevice"}
{"command": "status", "deviceId": "testdevice"}
```

**Plain Text Commands:**
- `on` or `turn_on`
- `off` or `turn_off`
- `toggle`
- `status`

### Testing Your ESP32

Use the included test script to verify ESP32 connectivity:

```bash
./iotdevice/test-esp32-mqtt.sh
```

This script provides:
- MQTT broker connectivity testing
- Command sending and response monitoring
- Interactive command interface
- Real-time topic monitoring

For detailed ESP32 setup instructions, see: [`iotdevice/ESP32_MQTT_README.md`](iotdevice/ESP32_MQTT_README.md)

## 🛠️ Development

### Local Development Setup

1. **Database Setup**
   ```bash
   # Start PostgreSQL (if not using Docker)
   sudo service postgresql start
   
   # Run migrations
   cd src
   npm run migrate:dev init
   
   # Generate Prisma client
   npm run generate
   
   # Seed database (optional)
   npm run seed
   ```

2. **Backend Development**
   ```bash
   cd src
   npm install
   npm run build
   npm run dev
   ```

3. **Frontend Development**
   ```bash
   cd src/ui
   npm install
   npm run dev
   ```

### Testing

#### MQTT Broker Testing
```bash
./src/tests/mqtt/test-mqtt-broker.sh
```

#### IoT Device Simulation
```bash
node ./src/tests/mqtt/simulate-iot-device.js
```

#### ESP32 Device Testing
```bash
./iotdevice/test-esp32-mqtt.sh
```

### Database Management

```bash
# View database in browser
npm run studio

# Create migration
npm run migrate:dev name_of_migration

# Reset database
npx prisma migrate reset
```

## 📊 Monitoring and Logging

### System Logs
The application provides comprehensive logging:
- **Authentication Events** - Login attempts, token validation
- **Device Operations** - Status changes, command execution
- **MQTT Communication** - Message flows, connection status
- **Automation Execution** - Rule triggers and actions
- **Error Tracking** - System errors and exceptions

### Health Monitoring
- **Device Connectivity** - Real-time online/offline status
- **MQTT Broker Status** - Connection health monitoring
- **Database Performance** - Query execution tracking
- **API Response Times** - Endpoint performance metrics

## 🔒 Security Considerations

### Production Deployment

For production environments, implement these security measures:

1. **MQTT Security**
   - Enable TLS/SSL encryption (port 8883)
   - Implement MQTT authentication
   - Use strong device-specific credentials

2. **Database Security**
   - Use strong database passwords
   - Enable SSL connections
   - Implement database backup strategies

3. **Application Security**
   - Use strong JWT secrets
   - Implement rate limiting
   - Enable HTTPS for web interface
   - Regular security updates

4. **Network Security**
   - Firewall configuration
   - VPN access for remote management
   - Network segmentation for IoT devices

## 📚 Additional Documentation

- **[ESP32 Setup Guide](iotdevice/ESP32_MQTT_README.md)** - Complete ESP32 integration guide
- **[MQTT Topics Guide](src/tests/mqtt/MQTT_TOPICS_GUIDE.md)** - Topic structure and message formats
- **[API Documentation](http://localhost:3000)** - Interactive Swagger documentation
- **[Database Schema](src/db/prisma/schema.prisma)** - Complete data model

## 🤝 Contributing

If you want to contribute, plese follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the GPL-3.0 License. See the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the documentation in the `docs/` folder
- Review the troubleshooting guides in component README files

---

**HomeControlHub** - Making smart home automation accessible, secure, and scalable! 🏠✨
