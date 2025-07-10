#!/usr/bin/env node

/**
 * IoT Device Simulator for Home Control Hub
 * 
 * This script simulates an IoT device that connects to your MQTT broker
 * and exchanges messages with the Home Control Hub backend.
 */

const mqtt = require('mqtt');
const crypto = require('crypto');

// Configuration
const CONFIG = {
    MQTT_HOST: 'localhost',
    MQTT_PORT: 1884,
    DEVICE_NAME: 'test-device-001',
    DEVICE_TOPIC: 'device/test-device-001',
    AES_KEY: 'test-device-aes-key-32-chars-!!',  // 32 characters for AES-256
    HEARTBEAT_INTERVAL: 30000, // 30 seconds
    TELEMETRY_INTERVAL: 60000, // 60 seconds
};

class IoTDeviceSimulator {
    constructor(config) {
        this.config = config;
        this.client = null;
        this.isOnline = false;
        this.deviceState = {
            power: false,
            brightness: 50,
            temperature: 22.5,
            humidity: 45.0,
            battery: 100
        };
    }

    // AES Encryption (matching backend implementation)
    encrypt(text) {
        try {
            const algorithm = 'aes-256-gcm';
            const key = crypto.createHash('sha256').update(this.config.AES_KEY).digest();
            const iv = crypto.randomBytes(12);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            
            let encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            const authTag = cipher.getAuthTag();
            
            return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
        } catch (error) {
            console.error('❌ Encryption error:', error);
            return null;
        }
    }

    // AES Decryption (matching backend implementation)
    decrypt(encryptedText) {
        try {
            const parts = encryptedText.split(':');
            if (parts.length !== 3) {
                throw new Error('Invalid encrypted text format');
            }
            
            const [ivHex, authTagHex, ciphertext] = parts;
            const algorithm = 'aes-256-gcm';
            const key = crypto.createHash('sha256').update(this.config.AES_KEY).digest();
            const iv = Buffer.from(ivHex, 'hex');
            const authTag = Buffer.from(authTagHex, 'hex');

            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            decipher.setAuthTag(authTag);
            
            let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            
            return decrypted;
        } catch (error) {
            console.error('❌ Decryption error:', error);
            return null;
        }
    }

    async connect() {
        const brokerUrl = `mqtt://${this.config.MQTT_HOST}:${this.config.MQTT_PORT}`;
        console.log(`🔌 Connecting to MQTT broker: ${brokerUrl}`);
        
        this.client = mqtt.connect(brokerUrl, {
            clientId: `${this.config.DEVICE_NAME}_${Date.now()}`,
            clean: true,
        });

        this.client.on('connect', () => {
            console.log('✅ Connected to MQTT broker');
            this.isOnline = true;
            this.subscribeToCommands();
            this.sendStatusUpdate();
            this.startHeartbeat();
            this.startTelemetry();
        });

        this.client.on('error', (error) => {
            console.error('❌ MQTT connection error:', error);
        });

        this.client.on('close', () => {
            console.log('🔌 MQTT connection closed');
            this.isOnline = false;
        });

        this.client.on('message', (topic, message) => {
            this.handleCommand(topic, message);
        });
    }

    subscribeToCommands() {
        const commandTopic = `${this.config.DEVICE_TOPIC}/command/+`;
        this.client.subscribe(commandTopic, (err) => {
            if (err) {
                console.error('❌ Failed to subscribe to commands:', err);
            } else {
                console.log(`📥 Subscribed to commands: ${commandTopic}`);
            }
        });
    }

    handleCommand(topic, message) {
        console.log(`📨 Received command on topic: ${topic}`);
        
        const decryptedMessage = this.decrypt(message.toString());
        if (!decryptedMessage) {
            console.error('❌ Failed to decrypt command message');
            return;
        }

        try {
            const command = JSON.parse(decryptedMessage);
            console.log('🎮 Command:', command);

            // Extract command name from topic
            const topicParts = topic.split('/');
            const commandName = topicParts[topicParts.length - 1];

            // Simulate command execution
            switch (commandName) {
                case 'setPower':
                case 'power':
                    this.deviceState.power = command.power || command.on || false;
                    console.log(`💡 Power set to: ${this.deviceState.power}`);
                    break;
                
                case 'setBrightness':
                case 'brightness':
                    this.deviceState.brightness = Math.max(0, Math.min(100, command.brightness || 50));
                    console.log(`🔆 Brightness set to: ${this.deviceState.brightness}%`);
                    break;
                
                default:
                    console.log(`❓ Unknown command: ${commandName}`);
            }

            // Send command response
            this.sendCommandResponse(commandName, command, true);
            
            // Send updated status
            this.sendStatusUpdate();

        } catch (error) {
            console.error('❌ Error processing command:', error);
            this.sendCommandResponse('unknown', {}, false, error.message);
        }
    }

    sendStatusUpdate() {
        const status = {
            online: this.isOnline,
            status: this.deviceState.power,
            timestamp: new Date().toISOString()
        };

        this.publishEncrypted(`${this.config.DEVICE_TOPIC}/status`, status);
        console.log('📊 Status update sent:', status);
    }

    sendCommandResponse(commandName, originalCommand, success, error = null) {
        const response = {
            command: commandName,
            success: success,
            timestamp: new Date().toISOString(),
            deviceState: this.deviceState
        };

        if (error) {
            response.error = error;
        }

        this.publishEncrypted(`${this.config.DEVICE_TOPIC}/response`, response);
        console.log('📤 Command response sent:', response);
    }

    sendTelemetryData() {
        // Simulate changing sensor values
        this.deviceState.temperature += (Math.random() - 0.5) * 2; // ±1°C variation
        this.deviceState.humidity += (Math.random() - 0.5) * 10;   // ±5% variation
        this.deviceState.battery = Math.max(0, this.deviceState.battery - 0.1); // Slow discharge

        const telemetry = {
            temperature: Math.round(this.deviceState.temperature * 10) / 10,
            humidity: Math.round(this.deviceState.humidity * 10) / 10,
            battery: Math.round(this.deviceState.battery * 10) / 10,
            brightness: this.deviceState.brightness,
            power: this.deviceState.power,
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        };

        this.publishEncrypted(`${this.config.DEVICE_TOPIC}/telemetry`, telemetry);
        console.log('📈 Telemetry sent:', telemetry);
    }

    sendHeartbeat() {
        const heartbeat = {
            alive: true,
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        };

        this.publishEncrypted(`${this.config.DEVICE_TOPIC}/heartbeat`, heartbeat);
        console.log('💓 Heartbeat sent');
    }

    publishEncrypted(topic, payload) {
        const message = JSON.stringify(payload);
        const encrypted = this.encrypt(message);
        
        if (encrypted) {
            this.client.publish(topic, encrypted, { qos: 1 });
        } else {
            console.error('❌ Failed to encrypt message for topic:', topic);
        }
    }

    startHeartbeat() {
        setInterval(() => {
            if (this.isOnline) {
                this.sendHeartbeat();
            }
        }, this.config.HEARTBEAT_INTERVAL);
    }

    startTelemetry() {
        setInterval(() => {
            if (this.isOnline) {
                this.sendTelemetryData();
            }
        }, this.config.TELEMETRY_INTERVAL);
    }

    disconnect() {
        if (this.client) {
            console.log('🔌 Disconnecting from MQTT broker...');
            this.client.end();
        }
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting IoT Device Simulator');
    console.log('================================');
    console.log(`Device Name: ${CONFIG.DEVICE_NAME}`);
    console.log(`Device Topic: ${CONFIG.DEVICE_TOPIC}`);
    console.log(`MQTT Broker: ${CONFIG.MQTT_HOST}:${CONFIG.MQTT_PORT}`);
    console.log('');

    const device = new IoTDeviceSimulator(CONFIG);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        device.disconnect();
        process.exit(0);
    });

    try {
        await device.connect();
        console.log('✅ Device simulator started successfully!');
        console.log('💡 Try sending commands from the Home Control Hub UI');
        console.log('🔍 Monitor with: mosquitto_sub -h localhost -p 1884 -t "device/test-device-001/+"');
    } catch (error) {
        console.error('❌ Failed to start device simulator:', error);
        process.exit(1);
    }
}

main().catch(console.error);
