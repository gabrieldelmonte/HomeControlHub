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
import * as bcrypt from 'bcryptjs';

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
    public description?: string;
    public location: string;
    public mqttTopic: string;
    public aesKey: string;
    public ownerId: string | null;
    public createdAt: Date;
    public updatedAt: Date;
    private mqttService?: MQTTService;

    constructor(
        id: string,
        name: string,
        type: string,
        status: boolean,
        location: string,
        mqttTopic: string,
        aesKey: string,
        ownerId: string | null,
        createdAt: Date,
        updatedAt: Date,
        mqttService?: MQTTService,
        description?: string
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.location = location;
        this.mqttTopic = mqttTopic;
        this.aesKey = aesKey;
        this.ownerId = ownerId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.mqttService = mqttService;
        this.description = description;
    }

    /*
    // This is method is deprecated and should not be used!
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
    */

    public async registerDevice(currentUser: User, deviceRepository: DeviceRepository): Promise<Device | null> {
        if (currentUser.getRole() === UserRole_ENUM.GUEST) {
            console.warn(`User ${currentUser.getUsername()} with role GUEST is not allowed to register devices.`);
            return null;
        }

        const deviceData = {
            name: this.name,
            type: this.type,
            status: this.status,
            description: this.description,
            location: this.location,
            mqttTopic: this.mqttTopic,
            aesKey: this.aesKey,
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
            description: this.description,
            location: this.location,
            mqttTopic: this.mqttTopic,
            ownerId: this.ownerId
        });
    }

    public static async create(
        initData: { 
            name: string; 
            type: string; 
            location: string;
            mqttTopic: string;
            aesKey: string; 
            status?: boolean; 
            description?: string;
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
            initData.location,
            initData.mqttTopic,
            initData.aesKey,
            currentUser.id, // Set ownerId directly
            new Date(), // createdAt - placeholder, will be set by database
            new Date(), // updatedAt - placeholder, will be set by database
            mqttService,
            initData.description
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
        return new Device(
            deviceFromRepo.id,
            deviceFromRepo.name,
            deviceFromRepo.type,
            deviceFromRepo.status,
            deviceFromRepo.location,
            deviceFromRepo.mqttTopic,
            deviceFromRepo.aesKey,
            deviceFromRepo.ownerId || '',
            deviceFromRepo.createdAt || new Date(), // Use actual createdAt or fallback
            deviceFromRepo.updatedAt || new Date(), // Use actual updatedAt or fallback
            mqttService,
            deviceFromRepo.description
        );
    }
}

export class User {
    public id: string;
    public username: string;
    public email: string;
    private passwordHash: string;
    public role: UserRole_ENUM;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(
        id: string, 
        username: string, 
        email: string, 
        passwordHash: string, 
        role: UserRole_ENUM,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
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
        initData: { username: string; email: string; passwordPlain: string; role: UserRole_ENUM }, 
        userRepository: UserRepository
    ): Promise<User | null> {
        const passwordHash = await bcrypt.hash(initData.passwordPlain, SALT_ROUNDS);
        return userRepository.add({
            username: initData.username,
            email: initData.email,
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

    public static async findByEmail(
        email: string, 
        userRepository: UserRepository
    ): Promise<User | null> {
        return userRepository.findByEmail(email);
    }
}

export interface SupportTicket {
    id: string;
    subject: string;
    message: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    userId: string;
    attachments: string[];
    attachments2?: SupportTicketAttachment[];
    adminNotes?: string;
    resolvedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface SupportTicketAttachment {
    id: string;
    filename: string;
    contentType: string;
    fileSize: number;
    fileData: Buffer;
    ticketId: string;
    createdAt: Date;
}

export interface CreateSupportTicketData {
    subject: string;
    message: string;
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    attachments?: string[];
    fileAttachments?: Express.Multer.File[];
}

export interface UpdateSupportTicketData {
    subject?: string;
    message?: string;
    status?: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    adminNotes?: string;
    resolvedAt?: Date;
}
