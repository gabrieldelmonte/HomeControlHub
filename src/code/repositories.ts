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
        description?: string;
        location: string;
        mqttTopic: string;
        aesKey: string;
        ownerId: string;
    }): Promise<Device | null> {
        try {
            const newDevicePrisma = await this.db.device.create({
                data: {
                    name: deviceData.name,
                    type: deviceData.type,
                    status: deviceData.status,
                    description: deviceData.description,
                    location: deviceData.location,
                    mqttTopic: deviceData.mqttTopic,
                    aesKey: deviceData.aesKey,
                    owner: { connect: { id: deviceData.ownerId } }
                },
            });
            
            return new Device(
                newDevicePrisma.id, 
                newDevicePrisma.name, 
                newDevicePrisma.type, 
                newDevicePrisma.status, 
                newDevicePrisma.location,
                newDevicePrisma.mqttTopic,
                newDevicePrisma.aesKey, 
                newDevicePrisma.userId,
                newDevicePrisma.createdAt,
                newDevicePrisma.updatedAt,
                undefined, // mqttService is optional
                newDevicePrisma.description || undefined
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
                updatedDevicePrisma.location,
                updatedDevicePrisma.mqttTopic,
                updatedDevicePrisma.aesKey, 
                updatedDevicePrisma.userId,
                updatedDevicePrisma.createdAt,
                updatedDevicePrisma.updatedAt,
                undefined, // mqttService is optional
                updatedDevicePrisma.description || undefined
            );
        } catch (error) {
            this.logger.logError(`Error updating device ${id}: ${error}`);
            return null;
        }
    }

    public async updateStatus(id: string, status: boolean): Promise<Device | null> {
        console.error(`DEVICE_REPOSITORY_UPDATE_STATUS: Updating device ${id} status to ${status}`); // DEBUG
        try {
            const updatedDevice = await this.db.device.update({
                where: { id },
                data: { 
                    status,
                    updatedAt: new Date()
                }
            });
            
            console.error("DEVICE_REPOSITORY_UPDATE_STATUS: Status update successful"); // DEBUG
            return new Device(
                updatedDevice.id, 
                updatedDevice.name, 
                updatedDevice.type, 
                updatedDevice.status,
                updatedDevice.location,
                updatedDevice.mqttTopic,
                updatedDevice.aesKey, 
                updatedDevice.userId,
                updatedDevice.createdAt,
                updatedDevice.updatedAt,
                undefined, // mqttService is optional
                updatedDevice.description || undefined
            );
        } catch (error) {
            console.error("DEVICE_REPOSITORY_UPDATE_STATUS: Error updating status", error); // DEBUG
            this.logger.logError(`Error updating device status: ${error}`);
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
                devicePrisma.location,
                devicePrisma.mqttTopic,
                devicePrisma.aesKey, 
                devicePrisma.userId,
                devicePrisma.createdAt,
                devicePrisma.updatedAt,
                undefined, // mqttService is optional
                devicePrisma.description || undefined
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
                d.location,
                d.mqttTopic,
                d.aesKey, 
                d.userId,
                d.createdAt,
                d.updatedAt,
                undefined, // mqttService is optional
                d.description || undefined
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
                d.location,
                d.mqttTopic,
                d.aesKey, 
                d.userId,
                d.createdAt,
                d.updatedAt,
                undefined, // mqttService is optional
                d.description || undefined
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
            return new User(
                newUserPrisma.id, 
                newUserPrisma.username, 
                newUserPrisma.email, 
                newUserPrisma.passwordHash, 
                newUserPrisma.role as UserRole_ENUM,
                newUserPrisma.createdAt,
                newUserPrisma.updatedAt
            );
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
            return new User(
                updatedUserPrisma.id, 
                updatedUserPrisma.username, 
                updatedUserPrisma.email, 
                updatedUserPrisma.passwordHash, 
                updatedUserPrisma.role as UserRole_ENUM,
                updatedUserPrisma.createdAt,
                updatedUserPrisma.updatedAt
            );
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
            return new User(
                userPrisma.id, 
                userPrisma.username, 
                userPrisma.email, 
                userPrisma.passwordHash, 
                userPrisma.role as UserRole_ENUM,
                userPrisma.createdAt,
                userPrisma.updatedAt
            );
        } catch (error) {
            this.logger.logError(`Error finding user by username ${username}: ${error}`);
            return null;
        }
    }

    public async findByEmail(email: string): Promise<User | null> {
        try {
            const userPrisma = await this.db.user.findUnique({ where: { email } });
            if (!userPrisma) return null;
            return new User(
                userPrisma.id, 
                userPrisma.username, 
                userPrisma.email, 
                userPrisma.passwordHash, 
                userPrisma.role as UserRole_ENUM,
                userPrisma.createdAt,
                userPrisma.updatedAt
            );
        } catch (error) {
            this.logger.logError(`Error finding user by email ${email}: ${error}`);
            return null;
        }
    }

    public async findById(id: string): Promise<User | null> {
        try {
            const userPrisma = await this.db.user.findUnique({ where: { id } });
            if (!userPrisma) return null;
            return new User(
                userPrisma.id, 
                userPrisma.username, 
                userPrisma.email, 
                userPrisma.passwordHash, 
                userPrisma.role as UserRole_ENUM,
                userPrisma.createdAt,
                userPrisma.updatedAt
            );
        } catch (error) {
            this.logger.logError(`Error finding user by ID ${id}: ${error}`);
            return null;
        }
    }
    
    public async findAll(): Promise<User[]> {
        try {
            const usersPrisma = await this.db.user.findMany();
            return usersPrisma.map(u => new User(
                u.id, 
                u.username, 
                u.email, 
                u.passwordHash, 
                u.role as UserRole_ENUM,
                u.createdAt,
                u.updatedAt
            ));
        } catch (error) {
            this.logger.logError(`Error finding all users: ${error}`);
            return [];
        }
    }
}

export class NotificationRepository {
    private db: Database;
    private logger: Logger;

    constructor() {
        this.db = Database.getInstance();
        this.logger = Logger.getInstance();
    }

    public async findByUserId(userId: string): Promise<any[]> {
        try {
            const notifications = await this.db.notification.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' }
            });
            return notifications;
        } catch (error) {
            this.logger.logError(`Error finding notifications for user ${userId}: ${error}`);
            return [];
        }
    }

    public async findUnreadByUserId(userId: string): Promise<any[]> {
        try {
            const notifications = await this.db.notification.findMany({
                where: { 
                    userId,
                    read: false 
                },
                orderBy: { createdAt: 'desc' }
            });
            return notifications;
        } catch (error) {
            this.logger.logError(`Error finding unread notifications for user ${userId}: ${error}`);
            return [];
        }
    }

    public async markAsRead(notificationId: string, userId: string): Promise<boolean> {
        try {
            await this.db.notification.update({
                where: { 
                    id: notificationId,
                    userId // Ensure user can only mark their own notifications as read
                },
                data: { read: true }
            });
            return true;
        } catch (error) {
            this.logger.logError(`Error marking notification ${notificationId} as read: ${error}`);
            return false;
        }
    }

    public async create(notificationData: {
        message: string;
        type: string;
        userId: string;
    }): Promise<any | null> {
        try {
            const notification = await this.db.notification.create({
                data: notificationData
            });
            return notification;
        } catch (error) {
            this.logger.logError(`Error creating notification: ${error}`);
            return null;
        }
    }

    public async findById(id: string): Promise<any | null> {
        try {
            const notification = await this.db.notification.findUnique({ 
                where: { id } 
            });
            return notification;
        } catch (error) {
            this.logger.logError(`Error finding notification by ID ${id}: ${error}`);
            return null;
        }
    }
}

export class SystemLogRepository {
    private db: Database;
    private logger: Logger;

    constructor() {
        this.db = Database.getInstance();
        this.logger = Logger.getInstance();
    }

    public async createDeviceLog(data: {
        deviceId: string;
        userId: string;
        message: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
        source: string;
    }): Promise<any | null> {
        try {
            const log = await this.db.systemLog.create({
                data: {
                    deviceId: data.deviceId,
                    userId: data.userId,
                    message: data.message,
                    type: data.type,
                    source: data.source
                }
            });
            return log;
        } catch (error) {
            this.logger.logError(`Error creating device log: ${error}`);
            return null;
        }
    }

    public async getDeviceLogs(deviceId: string, limit: number = 50): Promise<any[]> {
        try {
            const logs = await this.db.systemLog.findMany({
                where: { deviceId },
                orderBy: { createdAt: 'desc' },
                take: limit,
                include: {
                    user: {
                        select: {
                            username: true,
                            email: true
                        }
                    },
                    device: {
                        select: {
                            name: true
                        }
                    }
                }
            });
            return logs;
        } catch (error) {
            this.logger.logError(`Error fetching device logs for device ${deviceId}: ${error}`);
            return [];
        }
    }

    public async getUserLogs(userId: string, limit: number = 50): Promise<any[]> {
        try {
            const logs = await this.db.systemLog.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: limit,
                include: {
                    device: {
                        select: {
                            name: true
                        }
                    }
                }
            });
            return logs;
        } catch (error) {
            this.logger.logError(`Error fetching user logs for user ${userId}: ${error}`);
            return [];
        }
    }

    public async getSystemLogs(limit: number = 100): Promise<any[]> {
        try {
            const logs = await this.db.systemLog.findMany({
                orderBy: { createdAt: 'desc' },
                take: limit,
                include: {
                    user: {
                        select: {
                            username: true,
                            email: true
                        }
                    },
                    device: {
                        select: {
                            name: true
                        }
                    }
                }
            });
            return logs;
        } catch (error) {
            this.logger.logError(`Error fetching system logs: ${error}`);
            return [];
        }
    }
}

export class AutomationRuleRepository {
    private db: Database;
    private logger: Logger;

    constructor() {
        this.db = Database.getInstance();
        this.logger = Logger.getInstance();
    }

    public async create(ruleData: {
        name: string;
        triggerCondition: string;
        action: any;
        deviceId: string;
    }): Promise<any | null> {
        try {
            const rule = await this.db.automationRule.create({
                data: {
                    name: ruleData.name,
                    triggerCondition: ruleData.triggerCondition,
                    action: ruleData.action,
                    deviceId: ruleData.deviceId,
                    active: true
                }
            });
            return rule;
        } catch (error) {
            this.logger.logError(`Error creating automation rule: ${error}`);
            return null;
        }
    }

    public async findByDeviceId(deviceId: string): Promise<any[]> {
        try {
            const rules = await this.db.automationRule.findMany({
                where: { deviceId },
                orderBy: { createdAt: 'desc' }
            });
            return rules;
        } catch (error) {
            this.logger.logError(`Error finding automation rules for device ${deviceId}: ${error}`);
            return [];
        }
    }

    public async findById(id: string): Promise<any | null> {
        try {
            const rule = await this.db.automationRule.findUnique({
                where: { id },
                include: {
                    device: true
                }
            });
            return rule;
        } catch (error) {
            this.logger.logError(`Error finding automation rule ${id}: ${error}`);
            return null;
        }
    }

    public async update(id: string, updateData: {
        name?: string;
        triggerCondition?: string;
        action?: any;
        active?: boolean;
    }): Promise<any | null> {
        try {
            const rule = await this.db.automationRule.update({
                where: { id },
                data: updateData
            });
            return rule;
        } catch (error) {
            this.logger.logError(`Error updating automation rule ${id}: ${error}`);
            return null;
        }
    }

    public async delete(id: string): Promise<boolean> {
        try {
            await this.db.automationRule.delete({
                where: { id }
            });
            return true;
        } catch (error) {
            this.logger.logError(`Error deleting automation rule ${id}: ${error}`);
            return false;
        }
    }

    public async findActiveByDeviceId(deviceId: string): Promise<any[]> {
        try {
            const rules = await this.db.automationRule.findMany({
                where: { 
                    deviceId,
                    active: true 
                },
                orderBy: { createdAt: 'desc' }
            });
            return rules;
        } catch (error) {
            this.logger.logError(`Error finding active automation rules for device ${deviceId}: ${error}`);
            return [];
        }
    }
}
