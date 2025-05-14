/*
    * Home Control Hub
    * 
    * This file contains the service classes for the Home Control Hub application.
    * Each service class is responsible for a specific functionality within the application.
    *
*/

import { User, Device, Command } from './entities';
import { Config, Logger, Database } from './infrastructure';
import { UserRepository, DeviceRepository } from './repositories';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as MQTT from 'mqtt';
import * as crypto from 'crypto';
import { UserRole_ENUM } from './enums';

const SALT_ROUNDS = 10;

export interface AuthTokenPayload {
    userId: string;
    username: string;
    role: UserRole_ENUM;
}

export class AuthService {
    private userRepository: UserRepository;
    private config: Config;
    private logger: Logger;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
        this.config = Config.getInstance();
        this.logger = Logger.getInstance();
    }

    public async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, SALT_ROUNDS);
    }

    public async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    public generateJWT(user: User): string {
        const payload: AuthTokenPayload = {
            userId: user.id,
            username: user.username,
            role: user.role,
        };
        try {
            const expirationString = this.config.getJwtExpiration();
            const expirationInSeconds = parseInt(expirationString, 10);

            if (isNaN(expirationInSeconds)) {
                this.logger.logError(`Invalid JWT expiration format from config: "${expirationString}". Expected a numeric string representing seconds.`);
                throw new Error(`Invalid JWT expiration value in config: '${expirationString}' is not a numeric string for seconds.`);
            }

            const options: jwt.SignOptions = { expiresIn: expirationInSeconds };
            return jwt.sign(payload, this.config.getJwtSecret(), options);
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.startsWith("Invalid JWT expiration value in config")) {
                    this.logger.logError(`Error generating JWT due to configuration: ${error.message}`);
                } else {
                    this.logger.logError(`Error generating JWT: ${error.message}`);
                }
            } else {
                this.logger.logError(`Error generating JWT: An unknown error occurred`);
            }
            throw new Error("JWT generation failed");
        }
    }

    public verifyJWT(token: string): AuthTokenPayload | null {
        try {
            const decoded = jwt.verify(token, this.config.getJwtSecret()) as AuthTokenPayload;
            return decoded;
        } catch (error: unknown) {
            if (error instanceof jwt.TokenExpiredError) {
                this.logger.logInfo(`JWT verification failed: Token expired at ${new Date(error.expiredAt).toISOString()}`);
            } else if (error instanceof jwt.JsonWebTokenError) {
                this.logger.logInfo(`JWT verification failed: ${error.message}`);
            } else if (error instanceof Error) {
                this.logger.logError(`JWT verification failed with unexpected error: ${error.message}`);
            } else {
                this.logger.logError(`JWT verification failed with unexpected error of unknown type.`);
            }
            return null;
        }
    }
}

export class MQTTConnection {
    private client: MQTT.MqttClient | null = null;
    private config: Config;
    private logger: Logger;
    private onMessageCallback?: (topic: string, message: Buffer) => void;

    constructor() {
        this.config = Config.getInstance();
        this.logger = Logger.getInstance();
    }

    public setOnMessageCallback(callback: (topic: string, message: Buffer) => void) {
        this.onMessageCallback = callback;
    }

    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            const brokerUrl = `${this.config.getMqttBrokerUrl()}:${this.config.getMqttPort()}`;
            const options: MQTT.IClientOptions = {
                clientId: `home_control_hub_server_${crypto.randomBytes(8).toString('hex')}`,
                clean: true, 
            };
            this.client = MQTT.connect(brokerUrl, options);

            this.client.on('connect', () => {
                this.logger.logInfo(`Successfully connected to MQTT broker at ${brokerUrl}`);
                resolve();
            });

            this.client.on('error', (error) => {
                this.logger.logError(`MQTT connection error: ${error}`);
                this.client?.end(true);
                reject(error);
            });

            this.client.on('close', () => {
                this.logger.logInfo('MQTT connection closed.');
            });
            
            this.client.on('message', (topic, message) => {
                this.logger.logDebug(`MQTT message received on topic ${topic}`);
                if (this.onMessageCallback) {
                    this.onMessageCallback(topic, message);
                } else {
                    this.logger.logWarn(`No onMessageCallback set for MQTTConnection. Message from ${topic} not processed further here.`);
                }
            });
        });
    }

    public publish(topic: string, message: string | Buffer, options?: MQTT.IClientPublishOptions): Promise<MQTT.Packet | undefined> {
        return new Promise((resolve, reject) => {
            if (!this.client || !this.client.connected) {
                this.logger.logError('MQTT client not connected. Cannot publish.');
                return reject(new Error('MQTT client not connected'));
            }
            this.client.publish(topic, message, options || { qos: 1, retain: false }, (error, packet) => {
                if (error) {
                    this.logger.logError(`MQTT publish error to topic ${topic}: ${error}`);
                    return reject(error);
                }
                this.logger.logDebug(`Message published to topic ${topic}`);
                resolve(packet as MQTT.Packet | undefined);
            });
        });
    }

    public subscribe(topic: string, options?: MQTT.IClientSubscribeOptions): Promise<MQTT.ISubscriptionGrant[]> {
        return new Promise((resolve, reject) => {
            if (!this.client || !this.client.connected) {
                this.logger.logError('MQTT client not connected. Cannot subscribe.');
                return reject(new Error('MQTT client not connected'));
            }
            this.client.subscribe(topic, options || { qos: 1 }, (error, granted) => {
                if (error) {
                    this.logger.logError(`MQTT subscribe error to topic ${topic}: ${error}`);
                    return reject(error);
                }
                const grants = granted || [];
                if (grants.length > 0) {
                    this.logger.logInfo(`Subscribed to MQTT topic ${topic} with QoS ${grants[0].qos}`);
                } else {
                    this.logger.logWarn(`Subscription to ${topic} might have issues or topic is invalid, granted: ${JSON.stringify(grants)}`);
                }
                resolve(grants);
            });
        });
    }

    public getClient(): MQTT.MqttClient | null {
        return this.client;
    }

    public disconnect(): void {
        if (this.client) {
            this.client.end();
        }
    }
}

export class MQTTService {
    private mqttConnection: MQTTConnection;
    private deviceRepository: DeviceRepository;
    private encryptionService: EncryptionService;
    private automationService!: AutomationService;
    private logger: Logger;

    constructor(mqttConnection: MQTTConnection, deviceRepository: DeviceRepository, encryptionService: EncryptionService) {
        this.mqttConnection = mqttConnection;
        this.deviceRepository = deviceRepository;
        this.encryptionService = encryptionService;
        this.logger = Logger.getInstance();
    }
    
    public setAutomationService(automationService: AutomationService) {
        this.automationService = automationService;
    }

    public async initialize(): Promise<void> {
        this.mqttConnection.setOnMessageCallback(this.handleIncomingMessage.bind(this));
        await this.mqttConnection.subscribe('home/devices/+/status');
        await this.mqttConnection.subscribe('home/devices/+/telemetry');
        await this.mqttConnection.subscribe('home/devices/+/telemetry/firmwareVersion');
        this.logger.logInfo('MQTTService initialized and subscribed to device topics.');
    }

    private async handleIncomingMessage(topic: string, message: Buffer): Promise<void> {
        this.logger.logInfo(`MQTTService handling message from topic: ${topic}`);
        const topicParts = topic.split('/');
        if (topicParts.length < 4 || topicParts[0] !== 'home' || topicParts[1] !== 'devices') {
            this.logger.logWarn(`Received message on unknown topic structure: ${topic}`);
            return;
        }
        const deviceId = topicParts[2];
        const messageType = topicParts[3];
        const subMessageType = topicParts.length > 4 ? topicParts[4] : null;

        const device = await this.deviceRepository.findById(deviceId);
        if (!device) {
            this.logger.logWarn(`Received MQTT message for unknown device ID: ${deviceId} on topic ${topic}`);
            return;
        }

        const decryptedPayloadString = this.encryptionService.decrypt(message.toString('utf-8'), device.aesKey);
        if (!decryptedPayloadString) {
            this.logger.logError(`Failed to decrypt message from device ${deviceId} on topic ${topic}`);
            return;
        }

        try {
            const payload = JSON.parse(decryptedPayloadString);
            this.logger.logInfo(`Decrypted data from ${deviceId} (${messageType}${subMessageType ? '/' + subMessageType : ''}): ${JSON.stringify(payload)}`);
            
            let updated = false;
            if (messageType === 'status') {
                if (typeof payload.status === 'boolean') {
                    await this.deviceRepository.update(deviceId, { status: payload.status, lastKnownState: payload as any });
                    updated = true;
                } else {
                     await this.deviceRepository.update(deviceId, { lastKnownState: payload as any });
                     updated = true;
                }
            } else if (messageType === 'telemetry') {
                if (subMessageType === 'firmwareVersion' && typeof payload.version === 'string') {
                    await this.deviceRepository.update(deviceId, { firmwareVersion: payload.version, lastKnownState: device.lastKnownState });
                    updated = true;
                } else {
                    await this.deviceRepository.update(deviceId, { lastKnownState: payload as any });
                    updated = true;
                }
            } else {
                this.logger.logWarn(`Unhandled message type '${messageType}' from device ${deviceId}`);
            }

            if (updated && this.automationService) {
                const freshDeviceState = await this.deviceRepository.findById(deviceId);
                if (freshDeviceState) {
                    await this.automationService.executeRulesForDevice(freshDeviceState, payload);
                }
            }

        } catch (error) {
            this.logger.logError(`Error processing decrypted message from ${deviceId}: ${error}. Payload: ${decryptedPayloadString}`);
        }
    }

    public async publishCommand(deviceId: string, commandName: string, payload: object): Promise<void> {
        const device = await this.deviceRepository.findById(deviceId);
        if (!device) {
            this.logger.logError(`Device ${deviceId} not found for publishing command.`);
            throw new Error(`Device ${deviceId} not found`);
        }

        const messageString = JSON.stringify(payload);
        const encryptedMessage = this.encryptionService.encrypt(messageString, device.aesKey);

        if (!encryptedMessage) {
            this.logger.logError(`Failed to encrypt command for device ${deviceId}`);
            throw new Error("Encryption failed for command");
        }

        const topic = `home/devices/${deviceId}/command/${commandName}`;
        await this.mqttConnection.publish(topic, encryptedMessage);
        this.logger.logInfo(`Published command '${commandName}' to ${topic}`);
    }
}

export class EncryptionService {
    private config: Config;
    private logger: Logger;
    private readonly algorithm: string = 'aes-256-gcm';
    private readonly ivLength = 12;

    constructor() {
        this.config = Config.getInstance();
        this.logger = Logger.getInstance();
        const configuredAlgo = this.config.getEncryptionAlgorithm();
        if (configuredAlgo !== 'aes-256-gcm') {
            this.logger.logWarn(`Configured encryption algorithm '${configuredAlgo}' is not 'aes-256-gcm'. Defaulting to aes-256-gcm as it is hardcoded with GCM specific methods.`);
        }
    }

    private getDerivedKey(deviceSpecificKey: string): Buffer {
        return crypto.createHash('sha256').update(String(deviceSpecificKey)).digest();
    }

    public encrypt(text: string, deviceKey: string): string | null {
        if (!deviceKey) {
            this.logger.logError("Encryption error: Device key is missing.");
            return null;
        }
        try {
            const key = this.getDerivedKey(deviceKey);
            const iv = crypto.randomBytes(this.ivLength);
            const cipher = crypto.createCipheriv(this.algorithm, key, iv) as crypto.CipherGCM;
            let encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            const authTag = cipher.getAuthTag();
            return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
        } catch (error) {
            this.logger.logError(`Encryption error: ${error}`);
            return null;
        }
    }

    public decrypt(encryptedText: string, deviceKey: string): string | null {
        if (!deviceKey) {
            this.logger.logError("Decryption error: Device key is missing.");
            return null;
        }
        try {
            const parts = encryptedText.split(':');
            if (parts.length !== 3) {
                this.logger.logError("Invalid encrypted text format. Expected iv:authTag:ciphertext");
                return null;
            }
            const [ivHex, authTagHex, ciphertext] = parts;
            const key = this.getDerivedKey(deviceKey);
            const iv = Buffer.from(ivHex, 'hex');
            const authTag = Buffer.from(authTagHex, 'hex');

            const decipher = crypto.createDecipheriv(this.algorithm, key, iv) as crypto.DecipherGCM;
            decipher.setAuthTag(authTag);
            let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            this.logger.logError(`Decryption error: ${error}`);
            return null;
        }
    }
}

export class AutomationRule {
    public id: string;
    public name: string;
    public triggerCondition: string;
    public actionDeviceId: string;
    public actionCommand: Command;
    private logger: Logger;

    constructor(id: string, name: string, triggerCondition: string, actionDeviceId: string, actionCommand: Command) {
        this.id = id;
        this.name = name;
        this.triggerCondition = triggerCondition;
        this.actionDeviceId = actionDeviceId;
        this.actionCommand = actionCommand;
        this.logger = Logger.getInstance();
    }

    evaluate(triggeringDevice: Device, triggeringPayload: any): boolean {
        this.logger.logDebug(`Evaluating rule '${this.name}' for device ${triggeringDevice.name} based on payload: ${JSON.stringify(triggeringPayload)}`);
        try {
            if (this.triggerCondition.startsWith('payload.')) {
                const key = this.triggerCondition.split('.')[1].split(' ')[0];
                if (triggeringPayload.hasOwnProperty(key)) {
                    const parts = this.triggerCondition.match(/payload\.(\w+)\s*([<>=!]+)\s*(\S+)/);
                    if (parts && parts.length === 4) {
                        const pKey = parts[1];
                        const operator = parts[2];
                        const value = parseFloat(parts[3]);
                        const actualValue = parseFloat(triggeringPayload[pKey]);

                        if (!isNaN(actualValue) && !isNaN(value)) {
                            if (operator === '>' && actualValue > value) return true;
                            if (operator === '<' && actualValue < value) return true;
                            if (operator === '===' && actualValue === value) return true;
                        }
                    }
                }
            }
        } catch (e) {
            this.logger.logError(`Error evaluating rule condition '${this.triggerCondition}': ${e}`);
            return false;
        }
        this.logger.logDebug(`Rule '${this.name}' condition not met.`);
        return false;
    }
}

export class AutomationService {
    private rules: Map<string, AutomationRule> = new Map();
    private notificationService: NotificationService;
    private mqttService!: MQTTService;
    private logger: Logger;
    private userRepository: UserRepository;

    constructor(notificationService: NotificationService, userRepository: UserRepository) {
        this.notificationService = notificationService;
        this.userRepository = userRepository;
        this.logger = Logger.getInstance();
        this.loadPlaceholderRules();
    }

    public setMqttService(mqttService: MQTTService) {
        this.mqttService = mqttService;
    }

    private loadPlaceholderRules() {
        const exampleCommand = new Command("setPower", { on: true } as any);
        const rule1 = new AutomationRule("rule_temp_high_fan_on", "High Temp Fan On", "payload.temperature > 28", "device_fan_123", exampleCommand);
        this.addRule(rule1);
    }

    public addRule(rule: AutomationRule): void {
        if (this.rules.has(rule.id)) {
            this.logger.logWarn(`Automation rule with ID ${rule.id} already exists. Updating.`);
        }
        this.rules.set(rule.id, rule);
        this.logger.logInfo(`Automation rule '${rule.name}' (ID: ${rule.id}) added/updated.`);
    }

    public removeRule(ruleId: string): void {
        if (this.rules.delete(ruleId)) {
            this.logger.logInfo(`Automation rule ID ${ruleId} removed.`);
        } else {
            this.logger.logWarn(`Automation rule ID ${ruleId} not found for removal.`);
        }
    }

    public async executeRulesForDevice(triggeringDevice: Device, triggeringPayload: any): Promise<void> {
        if (!this.mqttService) {
            this.logger.logWarn("MQTTService not set in AutomationService. Cannot execute rule actions.");
            return;
        }
        this.logger.logDebug(`Executing automation rules triggered by device ${triggeringDevice.name}`);
        for (const rule of this.rules.values()) {
            if (rule.evaluate(triggeringDevice, triggeringPayload)) {
                this.logger.logInfo(`Rule '${rule.name}' triggered by ${triggeringDevice.name}. Executing action on device ${rule.actionDeviceId}.`);
                try {
                    await this.mqttService.publishCommand(rule.actionDeviceId, rule.actionCommand.name, rule.actionCommand.payload as any);
                    this.logger.logInfo(`Action '${rule.actionCommand.name}' for rule '${rule.name}' sent to device ${rule.actionDeviceId}`);
                } catch (error) {
                    this.logger.logError(`Error executing action for rule '${rule.name}' on device ${rule.actionDeviceId}: ${error}`);
                }
            }
        }
    }
}

export class NotificationService {
    private logger: Logger;

    constructor(){
        this.logger = Logger.getInstance();
    }

    sendPushNotification(user: User, message: string): void {
        this.logger.logInfo(`PUSH_NOTIFICATION to user ${user.username} (ID: ${user.id}): ${message}`);
    }
}
