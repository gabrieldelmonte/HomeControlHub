import { DeviceRepository } from '../repositories';
import { Device } from '../entities';

// Simple MQTT interface - in a real implementation this would use a proper MQTT client
interface MQTTService {
    publishCommand(topic: string, command: string, payload: any): Promise<boolean>;
    subscribe(topic: string, callback: (data: any) => void): void;
}

export class DeviceService {
    private mqttService: MQTTService;
    private deviceRepository: DeviceRepository;

    constructor(mqttService: MQTTService, deviceRepository: DeviceRepository) {
        this.mqttService = mqttService;
        this.deviceRepository = deviceRepository;
    }

    /**
     * Send a command to a device via MQTT
     */
    public async sendCommand(deviceId: string, command: string, payload: any): Promise<boolean> {
        try {
            const device = await this.deviceRepository.findById(deviceId);
            if (!device) {
                throw new Error(`Device with ID ${deviceId} not found`);
            }

            // Send command via MQTT to the device's topic
            const success = await this.mqttService.publishCommand(device.mqttTopic, command, payload);
            
            if (success) {
                // Log the command for audit trail
                console.log(`Command ${command} sent to device ${device.name} (${device.mqttTopic})`);
                
                // Update device status if it's a power command
                if (command === 'setPower' || command === 'toggle') {
                    const newStatus = payload.state === 'ON' || payload.state === true;
                    await this.deviceRepository.updateStatus(deviceId, newStatus);
                }
                
                return true;
            }
            
            return false;
        } catch (error) {
            console.error(`Error sending command to device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Toggle device power state
     */
    public async toggleDevice(deviceId: string): Promise<boolean> {
        try {
            const device = await this.deviceRepository.findById(deviceId);
            if (!device) {
                throw new Error(`Device with ID ${deviceId} not found`);
            }

            const newStatus = !device.status;
            const command = 'toggle';
            const payload = { state: newStatus ? 'ON' : 'OFF' };

            return await this.sendCommand(deviceId, command, payload);
        } catch (error) {
            console.error(`Error toggling device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Set device power state
     */
    public async setPowerState(deviceId: string, powerOn: boolean): Promise<boolean> {
        try {
            const command = 'setPower';
            const payload = { state: powerOn ? 'ON' : 'OFF' };

            return await this.sendCommand(deviceId, command, payload);
        } catch (error) {
            console.error(`Error setting power state for device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Set device brightness (for dimmable devices)
     */
    public async setBrightness(deviceId: string, brightness: number): Promise<boolean> {
        try {
            if (brightness < 0 || brightness > 100) {
                throw new Error('Brightness must be between 0 and 100');
            }

            const command = 'setBrightness';
            const payload = { brightness };

            return await this.sendCommand(deviceId, command, payload);
        } catch (error) {
            console.error(`Error setting brightness for device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Set device color (for RGB devices)
     */
    public async setColor(deviceId: string, red: number, green: number, blue: number): Promise<boolean> {
        try {
            if ([red, green, blue].some(val => val < 0 || val > 255)) {
                throw new Error('Color values must be between 0 and 255');
            }

            const command = 'setColor';
            const payload = { red, green, blue };

            return await this.sendCommand(deviceId, command, payload);
        } catch (error) {
            console.error(`Error setting color for device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Set temperature for thermostat devices
     */
    public async setTemperature(deviceId: string, temperature: number): Promise<boolean> {
        try {
            const command = 'setTemperature';
            const payload = { temperature };

            return await this.sendCommand(deviceId, command, payload);
        } catch (error) {
            console.error(`Error setting temperature for device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Create a basic automation rule
     */
    public async createBasicAutomationRule(
        deviceId: string,
        ruleName: string,
        triggerType: 'time' | 'sensor' | 'manual',
        triggerValue: any,
        action: string,
        actionPayload: any
    ): Promise<boolean> {
        try {
            const device = await this.deviceRepository.findById(deviceId);
            if (!device) {
                throw new Error(`Device with ID ${deviceId} not found`);
            }

            // This would typically interact with an AutomationRepository
            // For now, we'll create a simple rule structure
            const rule = {
                name: ruleName,
                deviceId: deviceId,
                trigger: {
                    type: triggerType,
                    value: triggerValue
                },
                action: {
                    command: action,
                    payload: actionPayload
                },
                active: true,
                createdAt: new Date()
            };

            console.log(`Created automation rule for device ${device.name}:`, rule);
            
            // Here you would save to database via AutomationRepository
            // await this.automationRepository.create(rule);
            
            return true;
        } catch (error) {
            console.error(`Error creating automation rule for device ${deviceId}:`, error);
            return false;
        }
    }

    /**
     * Get device status and information
     */
    public async getDeviceStatus(deviceId: string): Promise<Device | null> {
        try {
            return await this.deviceRepository.findById(deviceId);
        } catch (error) {
            console.error(`Error getting device status for ${deviceId}:`, error);
            return null;
        }
    }

    /**
     * Subscribe to device status updates via MQTT
     */
    public async subscribeToDeviceUpdates(deviceId: string, callback: (data: any) => void): Promise<void> {
        try {
            const device = await this.deviceRepository.findById(deviceId);
            if (device) {
                // Subscribe to status updates
                this.mqttService.subscribe(`${device.mqttTopic}/status`, callback);
            }
        } catch (error) {
            console.error(`Error subscribing to device updates for ${deviceId}:`, error);
        }
    }

    /**
     * Predefined device commands for common device types
     */
    public getDeviceCommands(deviceType: string): Array<{name: string, command: string, parameters?: any}> {
        const commandMap: Record<string, Array<{name: string, command: string, parameters?: any}>> = {
            'Smart Light': [
                { name: 'Turn On', command: 'setPower', parameters: { state: 'ON' } },
                { name: 'Turn Off', command: 'setPower', parameters: { state: 'OFF' } },
                { name: 'Toggle', command: 'toggle' },
                { name: 'Set Brightness', command: 'setBrightness', parameters: { brightness: 50 } },
                { name: 'Set Color', command: 'setColor', parameters: { red: 255, green: 255, blue: 255 } }
            ],
            'Smart Switch': [
                { name: 'Turn On', command: 'setPower', parameters: { state: 'ON' } },
                { name: 'Turn Off', command: 'setPower', parameters: { state: 'OFF' } },
                { name: 'Toggle', command: 'toggle' }
            ],
            'Smart Thermostat': [
                { name: 'Set Temperature', command: 'setTemperature', parameters: { temperature: 22 } },
                { name: 'Set Mode', command: 'setMode', parameters: { mode: 'auto' } }
            ],
            'Smart Lock': [
                { name: 'Lock', command: 'lock' },
                { name: 'Unlock', command: 'unlock' },
                { name: 'Check Status', command: 'getStatus' }
            ],
            'Smart Camera': [
                { name: 'Start Recording', command: 'startRecording' },
                { name: 'Stop Recording', command: 'stopRecording' },
                { name: 'Take Photo', command: 'takePhoto' }
            ],
            'Smart Sensor': [
                { name: 'Get Reading', command: 'getReading' },
                { name: 'Calibrate', command: 'calibrate' }
            ]
        };

        return commandMap[deviceType] || [
            { name: 'Turn On', command: 'setPower', parameters: { state: 'ON' } },
            { name: 'Turn Off', command: 'setPower', parameters: { state: 'OFF' } },
            { name: 'Toggle', command: 'toggle' }
        ];
    }
}
