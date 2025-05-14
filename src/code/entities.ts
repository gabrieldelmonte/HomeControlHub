/*
    * Home Control Hub
    * 
    * This file contains the entity classes for the Home Control Hub application.
    * Each entity class represents a specific object within the application.
    *
*/

import { MQTTService } from './services';
import { UserRole_ENUM } from './enums';
import { DeviceRepository, UserRepository } from './repositories';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export class Command {
    public name: string;
    public payload: Record<string, any>;

    constructor(name: string, payload: Record<string, any>) {
        this.payload = payload;
        this.name = name;
    }
}

export class Device {
    public id: string;
    public name: string;
    public type: string;
    public status: boolean;
    public aesKey: string;
    public lastKnownState: any;
    public ownerId: string | null;
    public firmwareVersion?: string;
    private mqttService?: MQTTService;

    constructor(
        id: string,
        name: string,
        type: string,
        status: boolean,
        aesKey: string,
        lastKnownState: any,
        ownerId: string | null,
        mqttService?: MQTTService,
        firmwareVersion?: string
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.aesKey = aesKey;
        this.lastKnownState = lastKnownState;
        this.ownerId = ownerId;
        this.mqttService = mqttService;
        this.firmwareVersion = firmwareVersion;
    }

    public async checkFirmwareVersion(): Promise<string> {
        if (!this.mqttService) {
            throw new Error('MQTTService is not available to check firmware version.');
        }
        await this.mqttService.publishCommand(this.id, 'getFirmwareVersion', {});

        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            const timeout = 30000;

            const intervalId = setInterval(async () => {
                if (this.firmwareVersion) {
                    clearInterval(intervalId);
                    resolve(this.firmwareVersion);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(intervalId);
                    reject(new Error(`Timeout waiting for firmware version for device ${this.id}`));
                }
            }, 1000);
        });
    }

    public async registerDevice(currentUser: User, deviceRepository: DeviceRepository): Promise<Device | null> {
        if (currentUser.getRole() === UserRole_ENUM.GUEST) {
            console.warn(`User ${currentUser.getUsername()} with role GUEST is not allowed to register devices.`);
            return null;
        }

        const deviceData = {
            name: this.name,
            type: this.type,
            status: this.status,
            aesKey: this.aesKey,
            lastKnownState: this.lastKnownState || {},
            firmwareVersion: this.firmwareVersion,
            ownerId: currentUser.id,
        };

        try {
            const registeredDevice = await deviceRepository.add(deviceData);
            if (registeredDevice) {
                this.id = registeredDevice.id;
                console.log(`Device ${this.name} registered successfully with ID ${this.id} by user ${currentUser.getUsername()}.`);
                return registeredDevice;
            } else {
                console.error(`Device ${this.name} registration failed for user ${currentUser.getUsername()}.`);
                return null;
            }
        } catch (error) {
            console.error(`Error during device registration for ${this.name}: ${error}`);
            return null;
        }
    }

    public updateStatus(newStatus: boolean): void {
        this.status = newStatus;
        console.log(`Device ${this.name} status updated to: ${this.status}`);
    }

    public handleCommand(cmd: Command): void {
        console.log(`Device ${this.name} received command: ${cmd.name} with payload ${JSON.stringify(cmd.payload)}`);
    }

    public getInfo(): string {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            type: this.type,
            status: this.status,
            lastKnownState: this.lastKnownState,
            ownerId: this.ownerId
        });
    }

    public static async create(
        initData: { 
            name: string; 
            type: string; 
            aesKey: string; 
            status?: boolean; 
            lastKnownState?: any; 
            firmwareVersion?: string 
        },
        currentUser: User, 
        deviceRepository: DeviceRepository, 
        mqttService?: MQTTService
    ): Promise<Device | null> {
        const newDevice = new Device(
            '', // ID will be set by the database via registerDevice
            initData.name,
            initData.type,
            initData.status || false,
            initData.aesKey,
            initData.lastKnownState || {},
            null, // ownerId will be set by registerDevice using currentUser.id
            mqttService,
            initData.firmwareVersion
        );

        return newDevice.registerDevice(currentUser, deviceRepository);
    }

    public static async findById(
        id: string, 
        deviceRepository: DeviceRepository, 
        mqttService?: MQTTService
    ): Promise<Device | null> {
        const deviceFromRepo = await deviceRepository.findById(id);

        if (!deviceFromRepo) {
            return null;
        }

        // Re-construct the Device entity to include the passed mqttService
        // The instance from the repository (deviceFromRepo) would have mqttService as undefined by default.
        return new Device(
            deviceFromRepo.id,
            deviceFromRepo.name,
            deviceFromRepo.type,
            deviceFromRepo.status,
            deviceFromRepo.aesKey,
            deviceFromRepo.lastKnownState,
            deviceFromRepo.ownerId,
            mqttService, // Pass the mqttService received by this static method
            deviceFromRepo.firmwareVersion
        );
    }
}

export class User {
    public id: string;
    public username: string;
    private passwordHash: string;
    public role: UserRole_ENUM;

    constructor(id: string, username: string, passwordHash: string, role: UserRole_ENUM) {
        this.id = id;
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPasswordHash(): string {
        return this.passwordHash;
    }

    public async setPassword(newPlainPassword: string): Promise<void> {
        this.passwordHash = await bcrypt.hash(newPlainPassword, SALT_ROUNDS);
    }

    public async checkPassword(passwordToCheck: string): Promise<boolean> {
        return bcrypt.compare(passwordToCheck, this.passwordHash);
    }

    public getRole(): UserRole_ENUM {
        return this.role;
    }

    public setRole(role: UserRole_ENUM): void {
        this.role = role;
    }

    public static async create(
        initData: { username: string; passwordPlain: string; role: UserRole_ENUM }, 
        userRepository: UserRepository
    ): Promise<User | null> {
        const passwordHash = await bcrypt.hash(initData.passwordPlain, SALT_ROUNDS);
        return userRepository.add({
            username: initData.username,
            passwordHash: passwordHash,
            role: initData.role,
        });
    }

    public static async findByUsername(
        username: string, 
        userRepository: UserRepository
    ): Promise<User | null> {
        return userRepository.findByUsername(username);
    }
}
