/*
    * Home Control Hub
    * 
    * This file contains the repository classes for the Home Control Hub application.
    * Each repository class is responsible for data access and manipulation for a specific entity.
    *
*/

import { Database, Logger } from './infrastructure';
import { Device, User } from './entities';
import { UserRole_ENUM } from './enums'; // Assuming UserRole_ENUM is needed for default user creation or queries
import { Prisma } from '../db/prisma/generated/prisma-client'; // Import Prisma namespace for types

// Assuming Prisma generates types like UserCreateInput, DeviceCreateInput, etc.
// If not, we might need to define interfaces for input data.
// For simplicity, we'll use Partial<User> or Partial<Device> for updates.

export class DeviceRepository {
    private db: Database;
    private logger: Logger;

    constructor() {
        this.db = Database.getInstance();
        this.logger = Logger.getInstance();
    }

    public async add(deviceData: {
        name: string;
        type: string;
        status: boolean;
        aesKey: string;
        ownerId: string; // This is the ID of the user who owns the device
        lastKnownState?: Prisma.JsonObject;
        firmwareVersion?: string; // Added firmwareVersion to input type
    }): Promise<Device | null> {
        try {
            const newDevicePrisma = await this.db.device.create({
                data: {
                    name: deviceData.name,
                    type: deviceData.type,
                    status: deviceData.status,
                    aesKey: deviceData.aesKey,
                    lastKnownState: deviceData.lastKnownState || {},
                    firmwareVersion: deviceData.firmwareVersion, // Added firmwareVersion
                    // Correcting based on typical Prisma relation naming, assuming relation is 'owner'
                    // and the foreign key field on the Device model is 'userId'
                    owner: { connect: { id: deviceData.ownerId } }
                },
            });
            // Prisma returns the created record, which should include the foreign key field (e.g., userId)
            return new Device(
                newDevicePrisma.id, 
                newDevicePrisma.name, 
                newDevicePrisma.type, 
                newDevicePrisma.status, 
                newDevicePrisma.aesKey, 
                newDevicePrisma.lastKnownState as any, 
                newDevicePrisma.userId, 
                undefined, // mqttService is optional
                newDevicePrisma.firmwareVersion || undefined // Pass firmwareVersion
            );
        } catch (error) {
            this.logger.logError(`Error adding device: ${error}`);
            return null;
        }
    }

    public async update(id: string, deviceUpdateData: Prisma.DeviceUpdateInput): Promise<Device | null> {
        try {
            const updatedDevicePrisma = await this.db.device.update({
                where: { id },
                data: deviceUpdateData,
            });
            return new Device(
                updatedDevicePrisma.id, 
                updatedDevicePrisma.name, 
                updatedDevicePrisma.type, 
                updatedDevicePrisma.status, 
                updatedDevicePrisma.aesKey, 
                updatedDevicePrisma.lastKnownState as any, 
                updatedDevicePrisma.userId, 
                undefined, // mqttService is optional
                updatedDevicePrisma.firmwareVersion || undefined // Pass firmwareVersion
            );
        } catch (error) {
            this.logger.logError(`Error updating device ${id}: ${error}`);
            return null;
        }
    }

    public async delete(id: string): Promise<boolean> {
        try {
            await this.db.device.delete({ where: { id } });
            return true;
        } catch (error) {
            this.logger.logError(`Error deleting device ${id}: ${error}`);
            return false;
        }
    }

    public async findById(id: string): Promise<Device | null> {
        try {
            const devicePrisma = await this.db.device.findUnique({ where: { id } });
            if (!devicePrisma) return null;
            return new Device(
                devicePrisma.id, 
                devicePrisma.name, 
                devicePrisma.type, 
                devicePrisma.status, 
                devicePrisma.aesKey, 
                devicePrisma.lastKnownState as any, 
                devicePrisma.userId, 
                undefined, // mqttService is optional
                devicePrisma.firmwareVersion || undefined // Pass firmwareVersion
            );
        } catch (error) {
            this.logger.logError(`Error finding device by ID ${id}: ${error}`);
            return null;
        }
    }

    public async findAll(): Promise<Device[]> {
        try {
            const devicesPrisma = await this.db.device.findMany();
            return devicesPrisma.map(d => new Device(
                d.id, 
                d.name, 
                d.type, 
                d.status, 
                d.aesKey, 
                d.lastKnownState as any, 
                d.userId, 
                undefined, // mqttService is optional
                d.firmwareVersion || undefined // Pass firmwareVersion
            ));
        } catch (error) {
            this.logger.logError(`Error finding all devices: ${error}`);
            return [];
        }
    }
    
    public async findByOwnerId(ownerId: string): Promise<Device[]> {
        try {
            const devicesPrisma = await this.db.device.findMany({ where: { userId: ownerId } }); 
            return devicesPrisma.map(d => new Device(
                d.id, 
                d.name, 
                d.type, 
                d.status, 
                d.aesKey, 
                d.lastKnownState as any, 
                d.userId, 
                undefined, // mqttService is optional
                d.firmwareVersion || undefined // Pass firmwareVersion
            ));
        } catch (error) {
            this.logger.logError(`Error finding devices by owner ID ${ownerId}: ${error}`);
            return [];
        }
    }
}

export class UserRepository {
    private db: Database;
    private logger: Logger;
    // Removed unused userRepository from DeviceRepository if it was a typo
    // private userRepository!: UserRepository; 

    constructor() {
        this.db = Database.getInstance();
        this.logger = Logger.getInstance();
    }

    public async add(userData: Prisma.UserCreateInput): Promise<User | null> {
        try {
            const newUserPrisma = await this.db.user.create({
                data: userData,
            });
            return new User(newUserPrisma.id, newUserPrisma.username, newUserPrisma.passwordHash, newUserPrisma.role as UserRole_ENUM);
        } catch (error) {
            this.logger.logError(`Error adding user: ${error}`);
            return null;
        }
    }

    public async update(id: string, userUpdateData: Prisma.UserUpdateInput): Promise<User | null> {
        try {
            const updatedUserPrisma = await this.db.user.update({
                where: { id },
                data: userUpdateData,
            });
            return new User(updatedUserPrisma.id, updatedUserPrisma.username, updatedUserPrisma.passwordHash, updatedUserPrisma.role as UserRole_ENUM);
        } catch (error) {
            this.logger.logError(`Error updating user ${id}: ${error}`);
            return null;
        }
    }

    public async delete(id: string): Promise<boolean> {
        try {
            await this.db.user.delete({ where: { id } });
            return true;
        } catch (error) {
            this.logger.logError(`Error deleting user ${id}: ${error}`);
            return false;
        }
    }

    public async findByUsername(username: string): Promise<User | null> {
        try {
            const userPrisma = await this.db.user.findUnique({ where: { username } });
            if (!userPrisma) return null;
            return new User(userPrisma.id, userPrisma.username, userPrisma.passwordHash, userPrisma.role as UserRole_ENUM);
        } catch (error) {
            this.logger.logError(`Error finding user by username ${username}: ${error}`);
            return null;
        }
    }

    public async findById(id: string): Promise<User | null> {
        try {
            const userPrisma = await this.db.user.findUnique({ where: { id } });
            if (!userPrisma) return null;
            return new User(userPrisma.id, userPrisma.username, userPrisma.passwordHash, userPrisma.role as UserRole_ENUM);
        } catch (error) {
            this.logger.logError(`Error finding user by ID ${id}: ${error}`);
            return null;
        }
    }
    
    public async findAll(): Promise<User[]> {
        try {
            const usersPrisma = await this.db.user.findMany();
            return usersPrisma.map(u => new User(u.id, u.username, u.passwordHash, u.role as UserRole_ENUM));
        } catch (error) {
            this.logger.logError(`Error finding all users: ${error}`);
            return [];
        }
    }
}
