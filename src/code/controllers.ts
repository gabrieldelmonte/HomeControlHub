/*
    * Home Control Hub
    * 
    * This file contains the controller classes for the Home Control Hub application.
    * Each controller class is responsible for a specific functionality within the application.
    *
*/

import { DeviceRepository, UserRepository, NotificationRepository, SystemLogRepository } from './repositories';
import { AuthService, MQTTService, AuthTokenPayload, NotificationService } from './services';
import { User, Device, Command } from './entities';
import { UserRole_ENUM } from './enums';
import { Logger } from './infrastructure';

import { Request, Response, NextFunction } from 'express';

export class DeviceController {
    private deviceRepository: DeviceRepository;
    private systemLogRepository: SystemLogRepository;
    private mqttService: MQTTService;
    private logger: Logger;

    constructor(deviceRepository: DeviceRepository, systemLogRepository: SystemLogRepository, mqttService: MQTTService) {
        this.deviceRepository = deviceRepository;
        this.systemLogRepository = systemLogRepository;
        this.mqttService = mqttService;
        this.logger = Logger.getInstance();
    }

    public async createDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Inside try block"); // DEBUG
            const { name, type, description, location, mqttTopic, aesKey, status } = req.body;
            console.error(`DEVICE_CONTROLLER_CREATE_DEVICE: Body parsed - name: ${name}`); // DEBUG
            if (!name || !type || !location || !mqttTopic || !aesKey) {
                console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Missing required fields"); // DEBUG
                res.status(400).json({ message: 'Missing required fields: name, type, location, mqttTopic, aesKey' });
                return;
            }
            if (!req.user || !req.user.userId) {
                console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Unauthorized: User not authenticated"); // DEBUG
                res.status(401).json({ message: 'Unauthorized: User not authenticated' });
                return;
            }

            const newDevice = await this.deviceRepository.add({
                name,
                type,
                status: typeof status === 'boolean' ? status : false,
                description,
                location,
                mqttTopic,
                aesKey,
                ownerId: req.user.userId,
            });
            console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Device added to repository"); // DEBUG

            if (newDevice) {
                console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Device added successfully"); // DEBUG
                
                // Log device creation
                await this.systemLogRepository.createDeviceLog({
                    deviceId: newDevice.id,
                    userId: req.user.userId,
                    message: `Device "${newDevice.name}" was created`,
                    type: 'INFO',
                    source: 'DEVICE'
                });
                
                res.status(201).json(newDevice);
            } else {
                console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Failed to create device"); // DEBUG
                res.status(500).json({ message: 'Failed to create device' });
            }
        } catch (error) {
            console.error("DEVICE_CONTROLLER_CREATE_DEVICE: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in createDevice: ${error}`);
            next(error);
        }
    }

    public async updateDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Inside try block"); // DEBUG
            const deviceId = req.params.deviceId;
            console.error(`DEVICE_CONTROLLER_UPDATE_DEVICE: Device ID: ${deviceId}`); // DEBUG
            if (!req.device) {
                console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Device not found"); // DEBUG
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: User attempting to update unowned device"); // DEBUG
                this.logger.logWarn(`User ${req.user?.username} attempting to update unowned device ${deviceId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }

            const updateData = req.body;
            delete updateData.id;    // Prevent changing id
            delete updateData.ownerId; // Prevent changing owner directly
            delete updateData.userId; // Prevent changing owner directly (if passed as userId)

            const updatedDevice = await this.deviceRepository.update(deviceId, updateData);
            if (updatedDevice) {
                console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Device updated successfully"); // DEBUG
                res.status(200).json(updatedDevice);
            } else {
                console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Device not found or update failed"); // DEBUG
                res.status(404).json({ message: 'Device not found or update failed' });
            }
        } catch (error) {
            console.error("DEVICE_CONTROLLER_UPDATE_DEVICE: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in updateDevice ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async updateDeviceStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_UPDATE_STATUS: Entry"); // DEBUG
        try {
            const { deviceId } = req.params;
            const { status } = req.body;
            
            console.error(`DEVICE_CONTROLLER_UPDATE_STATUS: Updating device ${deviceId} status to ${status}`); // DEBUG
            
            if (typeof status !== 'boolean') {
                res.status(400).json({ message: 'Status must be a boolean value' });
                return;
            }
            
            // Check if device exists and belongs to user
            const existingDevice = await this.deviceRepository.findById(deviceId);
            if (!existingDevice) {
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            
            // Check if user owns the device (unless admin)
            if (req.user?.role !== UserRole_ENUM.ADMIN && existingDevice.ownerId !== req.user?.userId) {
                res.status(403).json({ message: 'You can only update your own devices' });
                return;
            }
            
            // Update device status
            const updatedDevice = await this.deviceRepository.updateStatus(deviceId, status);
            
            if (!updatedDevice) {
                res.status(500).json({ message: 'Failed to update device status' });
                return;
            }
            
            // Log device status change
            await this.systemLogRepository.createDeviceLog({
                deviceId: deviceId,
                userId: req.user?.userId || 'system',
                message: `Device "${existingDevice.name}" status changed to ${status ? 'ON' : 'OFF'}`,
                type: 'INFO',
                source: 'DEVICE'
            });
            
            console.error("DEVICE_CONTROLLER_UPDATE_STATUS: Device status updated successfully"); // DEBUG
            res.status(200).json(updatedDevice);
            
        } catch (error) {
            console.error("DEVICE_CONTROLLER_UPDATE_STATUS: Caught error", error); // DEBUG
            this.logger.logError(`Error in updateDeviceStatus: ${error}`);
            next(error);
        }
    }

    public async deleteDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Inside try block"); // DEBUG
            const deviceId = req.params.deviceId;
            console.error(`DEVICE_CONTROLLER_DELETE_DEVICE: Device ID: ${deviceId}`); // DEBUG
            if (!req.device) {
                console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Device not found"); // DEBUG
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                console.error("DEVICE_CONTROLLER_DELETE_DEVICE: User attempting to delete unowned device"); // DEBUG
                this.logger.logWarn(`User ${req.user?.username} attempting to delete unowned device ${deviceId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }

            const success = await this.deviceRepository.delete(deviceId);
            if (success) {
                console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Device deleted successfully"); // DEBUG
                res.status(204).send();
            } else {
                console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Device not found or deletion failed"); // DEBUG
                res.status(404).json({ message: 'Device not found or deletion failed' });
            }
        } catch (error) {
            console.error("DEVICE_CONTROLLER_DELETE_DEVICE: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in deleteDevice ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async listDevices(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_LIST_DEVICES: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_LIST_DEVICES: Inside try block"); // DEBUG
            let devices: Device[] = [];
            if (req.user?.role === UserRole_ENUM.ADMIN) {
                devices = await this.deviceRepository.findAll();
            } else if (req.user?.userId) {
                console.error("DEVICE_CONTROLLER_LIST_DEVICES: User is not admin"); // DEBUG
                devices = await this.deviceRepository.findByOwnerId(req.user.userId);
            } else {
                console.error("DEVICE_CONTROLLER_LIST_DEVICES: Unauthenticated user attempting to list devices"); // DEBUG
                // Unauthenticated users see no devices, or handle as error based on policy
                // For now, returns empty list. Could also be a 401.
                 res.status(401).json({ message: 'Unauthorized: Authentication required to list devices'});
                 return;
            }
            res.status(200).json(devices);
        } catch (error) {
            console.error("DEVICE_CONTROLLER_LIST_DEVICES: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in listDevices: ${error}`);
            next(error);
        }
    }
    
    public async getDeviceById(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_GET_DEVICE_BY_ID: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_GET_DEVICE_BY_ID: Inside try block"); // DEBUG
            if (!req.device) {
                console.error("DEVICE_CONTROLLER_GET_DEVICE_BY_ID: Device not found"); // DEBUG
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                console.error("DEVICE_CONTROLLER_GET_DEVICE_BY_ID: User attempting to access unowned device"); // DEBUG
                this.logger.logWarn(`User ${req.user?.username} attempt to access unowned device ${req.device.id}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }
            res.status(200).json(req.device);
        } catch (error) {
            console.error("DEVICE_CONTROLLER_GET_DEVICE_BY_ID: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in getDeviceById ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async sendCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("DEVICE_CONTROLLER_SEND_COMMAND: Entry"); // DEBUG
        try {
            console.error("DEVICE_CONTROLLER_SEND_COMMAND: Inside try block"); // DEBUG
            const deviceId = req.params.deviceId;
            const { commandName, payload } = req.body;

            if (!req.device) {
                console.error("DEVICE_CONTROLLER_SEND_COMMAND: Device not found"); // DEBUG
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                console.error("DEVICE_CONTROLLER_SEND_COMMAND: User attempting to command unowned device"); // DEBUG
                this.logger.logWarn(`User ${req.user?.username} attempt to command unowned device ${deviceId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }
            if (!commandName || typeof payload === 'undefined') {
                console.error("DEVICE_CONTROLLER_SEND_COMMAND: Missing commandName or payload"); // DEBUG
                res.status(400).json({ message: 'Missing commandName or payload' });
                return;
            }

            await this.mqttService.publishCommand(deviceId, commandName, payload);
            res.status(202).json({ message: `Command '${commandName}' sent to device ${deviceId}` });
        } catch (error) {
            console.error("DEVICE_CONTROLLER_SEND_COMMAND: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in sendCommand to device ${req.params.deviceId}: ${error}`);
            if (error instanceof Error && error.message.includes("not found")) {
                console.error("DEVICE_CONTROLLER_SEND_COMMAND: Device not found"); // DEBUG
                res.status(404).json({ message: error.message });
            } else {
                console.error("DEVICE_CONTROLLER_SEND_COMMAND: Passing error to next middleware"); // DEBUG
                next(error);
            }
        }
    }

    public async getDeviceLogs(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { deviceId } = req.params;
            const limit = parseInt(req.query.limit as string) || 50;
            
            // Check if device exists and user has access
            const device = await this.deviceRepository.findById(deviceId);
            if (!device) {
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            
            // Check if user owns the device (unless admin)
            if (req.user?.role !== UserRole_ENUM.ADMIN && device.ownerId !== req.user?.userId) {
                res.status(403).json({ message: 'You can only view logs for your own devices' });
                return;
            }
            
            const logs = await this.systemLogRepository.getDeviceLogs(deviceId, limit);
            res.status(200).json(logs);
            
        } catch (error) {
            this.logger.logError(`Error in getDeviceLogs: ${error}`);
            next(error);
        }
    }
}

export class UserController {
    private userRepository: UserRepository;
    private authService: AuthService;
    private logger: Logger;

    constructor(userRepository: UserRepository, authService: AuthService) {
        this.userRepository = userRepository;
        this.authService = authService; 
        this.logger = Logger.getInstance();
    }

    public async getProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("USER_CONTROLLER_GET_PROFILE: Entry"); // DEBUG
        try {
            console.error("USER_CONTROLLER_GET_PROFILE: Inside try block"); // DEBUG
            if (!req.fullUser) {
                console.error("USER_CONTROLLER_GET_PROFILE: Unauthorized or user data not available"); // DEBUG
                res.status(401).json({ message: 'Unauthorized or user data not available' });
                return;
            }
            const userProfile = {
                id: req.fullUser.id,
                username: req.fullUser.username,
                email: req.fullUser.email,
                role: req.fullUser.role,
                createdAt: req.fullUser.createdAt,
                updatedAt: req.fullUser.updatedAt
            };
            res.status(200).json(userProfile);
        } catch (error) {
            console.error("USER_CONTROLLER_GET_PROFILE: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in getProfile for user ${req.user?.userId}: ${error}`);
            next(error);
        }
    }

    public async listUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("USER_CONTROLLER_LIST_USERS: Entry"); // DEBUG
        try {
            console.error("USER_CONTROLLER_LIST_USERS: Inside try block"); // DEBUG
            const users = await this.userRepository.findAll();
            const safeUsers = users.map(u => ({ 
                id: u.id,
                username: u.username,
                role: u.role
            }));
            res.status(200).json(safeUsers);
        } catch (error) {
            console.error("USER_CONTROLLER_LIST_USERS: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in listUsers: ${error}`);
            next(error);
        }
    }

    public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("USER_CONTROLLER_GET_USER_BY_ID: Entry"); // DEBUG
        try {
            console.error("USER_CONTROLLER_GET_USER_BY_ID: Inside try block"); // DEBUG
            const userId = req.params.userId;
            const user = await this.userRepository.findById(userId);
            if (!user) {
                console.error("USER_CONTROLLER_GET_USER_BY_ID: User not found"); // DEBUG
                res.status(404).json({ message: 'User not found' });
                return;
            }
            const userData = { 
                id: user.id, 
                username: user.username, 
                role: user.role 
            };
            res.status(200).json(userData);
        } catch (error) {
            console.error("USER_CONTROLLER_GET_USER_BY_ID: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in getUserById for ${req.params.userId}: ${error}`);
            next(error);
        }
    }

    public async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            if (!req.fullUser) {
                res.status(401).json({ message: 'Unauthorized or user data not available' });
                return;
            }

            const { username, email, password } = req.body;
            
            // Prepare update data
            const updateData: any = {};
            
            if (username && username !== req.fullUser.username) {
                // Check if username is already taken
                const existingUser = await this.userRepository.findByUsername(username);
                if (existingUser && existingUser.id !== req.fullUser.id) {
                    res.status(400).json({ message: 'Username already taken' });
                    return;
                }
                updateData.username = username;
            }
            
            if (email && email !== req.fullUser.email) {
                // Check if email is already taken
                const existingUser = await this.userRepository.findByEmail(email);
                if (existingUser && existingUser.id !== req.fullUser.id) {
                    res.status(400).json({ message: 'Email already taken' });
                    return;
                }
                updateData.email = email;
            }
            
            if (password && password.trim() !== '') {
                // Hash the new password
                const bcrypt = require('bcrypt');
                const SALT_ROUNDS = 10;
                updateData.passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
            }

            // If no changes, return current profile
            if (Object.keys(updateData).length === 0) {
                const userProfile = {
                    id: req.fullUser.id,
                    username: req.fullUser.username,
                    email: req.fullUser.email,
                    role: req.fullUser.role,
                    createdAt: req.fullUser.createdAt,
                    updatedAt: req.fullUser.updatedAt
                };
                res.status(200).json(userProfile);
                return;
            }

            // Update the user
            const updatedUser = await this.userRepository.update(req.fullUser.id, updateData);
            if (!updatedUser) {
                res.status(500).json({ message: 'Failed to update profile' });
                return;
            }

            const userProfile = {
                id: updatedUser.id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
                createdAt: updatedUser.createdAt,
                updatedAt: updatedUser.updatedAt
            };
            
            res.status(200).json(userProfile);
        } catch (error) {
            this.logger.logError(`Error in updateProfile for user ${req.user?.userId}: ${error}`);
            next(error);
        }
    }
}

export class AuthController {
    private userRepository: UserRepository;
    private authService: AuthService;
    private notificationRepository: NotificationRepository;
    private logger: Logger;

    constructor(userRepository: UserRepository, authService: AuthService, notificationRepository: NotificationRepository) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.notificationRepository = notificationRepository;
        this.logger = Logger.getInstance();
    }

    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("AUTH_CONTROLLER_REGISTER: Entry"); // DEBUG
        try {
            console.error("AUTH_CONTROLLER_REGISTER: Inside try block"); // DEBUG
            const { username, email, password, role } = req.body;
            console.error(`AUTH_CONTROLLER_REGISTER: Body parsed - username: ${username}, email: ${email}`); // DEBUG
            if (!username || !email || !password) {
                console.error("AUTH_CONTROLLER_REGISTER: Missing required fields"); // DEBUG
                res.status(400).json({ message: 'Username, email and password are required' });
                return;
            }

            console.error("AUTH_CONTROLLER_REGISTER: Checking existing user"); // DEBUG
            const existingUserByUsername = await this.userRepository.findByUsername(username);
            const existingUserByEmail = await this.userRepository.findByEmail(email);
            if (existingUserByUsername) {
                console.error("AUTH_CONTROLLER_REGISTER: Username already exists"); // DEBUG
                res.status(409).json({ message: 'Username already exists' });
                return;
            }
            if (existingUserByEmail) {
                console.error("AUTH_CONTROLLER_REGISTER: Email already exists"); // DEBUG
                res.status(409).json({ message: 'Email already exists' });
                return;
            }

            console.error("AUTH_CONTROLLER_REGISTER: Hashing password"); // DEBUG
            const passwordHash = await this.authService.hashPassword(password);
            console.error("AUTH_CONTROLLER_REGISTER: Password hashed"); // DEBUG
            
            let newRole = UserRole_ENUM.STANDARD_USER; // Default
            if (role && Object.values(UserRole_ENUM).includes(role)) {
                if (role === UserRole_ENUM.ADMIN) {
                    if (req.user?.role === UserRole_ENUM.ADMIN) {
                        newRole = UserRole_ENUM.ADMIN;
                    } else {
                        this.logger.logWarn(`Non-admin user ${req.user?.username} attempt to register new ADMIN. Defaulting to STANDARD_USER.`);
                    }
                } else {
                    newRole = role;
                }
            }
            console.error(`AUTH_CONTROLLER_REGISTER: Role determined: ${newRole}`); // DEBUG

            console.error("AUTH_CONTROLLER_REGISTER: Adding user to repository"); // DEBUG
            const newUserEntity = await this.userRepository.add({
                username,
                email,
                passwordHash,
                role: newRole,
            });
            console.error("AUTH_CONTROLLER_REGISTER: User add attempt completed"); // DEBUG

            if (newUserEntity) {
                console.error("AUTH_CONTROLLER_REGISTER: User registration successful"); // DEBUG
                
                // Create welcome notification for new users (but not for admins)
                if (newUserEntity.role === 'STANDARD_USER') {
                    try {
                        await this.notificationRepository.create({
                            message: 'Welcome to Home Control Hub! You can now manage and monitor all your smart devices from this dashboard.',
                            type: 'WELCOME',
                            userId: newUserEntity.id
                        });
                    } catch (notificationError) {
                        console.error("AUTH_CONTROLLER_REGISTER: Failed to create welcome notification", notificationError);
                        // Don't fail registration if notification creation fails
                    }
                }
                
                const userResponse = { 
                    id: newUserEntity.id, 
                    username: newUserEntity.username,
                    email: newUserEntity.email, 
                    role: newUserEntity.role 
                };
                res.status(201).json(userResponse);
            } else {
                console.error("AUTH_CONTROLLER_REGISTER: Failed to register user (newUserEntity is null)"); // DEBUG
                res.status(500).json({ message: 'Failed to register user' });
            }
        } catch (error) {
            console.error("AUTH_CONTROLLER_REGISTER: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in user registration: ${error}`);
            next(error);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("AUTH_CONTROLLER_LOGIN: Entry"); // DEBUG
        try {
            console.error("AUTH_CONTROLLER_LOGIN: Inside try block"); // DEBUG
            const { email, password } = req.body;
            console.error(`AUTH_CONTROLLER_LOGIN: Body parsed - email: ${email}`); // DEBUG
            if (!email || !password) {
                console.error("AUTH_CONTROLLER_LOGIN: Missing email or password"); // DEBUG
                res.status(400).json({ message: 'Email and password are required' });
                return;
            }

            const user = await this.userRepository.findByEmail(email);
            if (!user) {
                console.error("AUTH_CONTROLLER_LOGIN: User not found"); // DEBUG
                res.status(401).json({ message: 'Invalid credentials - user not found' });
                return;
            }

            const isPasswordValid = await this.authService.comparePassword(password, user.getPasswordHash());
            if (!isPasswordValid) {
                console.error("AUTH_CONTROLLER_LOGIN: Password mismatch"); // DEBUG
                res.status(401).json({ message: 'Invalid credentials - password mismatch' });
                return;
            }

            const token = this.authService.generateJWT(user);
            console.error("AUTH_CONTROLLER_LOGIN: Token generated"); // DEBUG
            res.status(200).json({ 
                token, 
                user: { 
                    id: user.id, 
                    username: user.username,
                    email: user.email, 
                    role: user.role 
                } 
            });
            console.error("AUTH_CONTROLLER_LOGIN: Response sent"); // DEBUG
        } catch (error) {
            console.error("AUTH_CONTROLLER_LOGIN: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in user login for ${req.body.email}: ${error}`);
            next(error);
        }
    }
}

export class NotificationController {
    private notificationRepository: NotificationRepository;
    private logger: Logger;

    constructor(notificationRepository: NotificationRepository) {
        this.notificationRepository = notificationRepository;
        this.logger = Logger.getInstance();
    }

    public async listNotifications(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("NOTIFICATION_CONTROLLER_LIST: Entry"); // DEBUG
        try {
            console.error("NOTIFICATION_CONTROLLER_LIST: Inside try block"); // DEBUG
            const userId = req.user?.userId;
            if (!userId) {
                console.error("NOTIFICATION_CONTROLLER_LIST: Unauthorized: User not authenticated"); // DEBUG
                res.status(401).json({ message: 'Unauthorized: User not authenticated' });
                return;
            }

            const notifications = await this.notificationRepository.findByUserId(userId);
            console.error(`NOTIFICATION_CONTROLLER_LIST: Notifications found: ${notifications.length}`); // DEBUG
            res.status(200).json(notifications);
        } catch (error) {
            console.error("NOTIFICATION_CONTROLLER_LIST: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in listNotifications: ${error}`);
            next(error);
        }
    }

    public async markAsRead(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Entry"); // DEBUG
        try {
            console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Inside try block"); // DEBUG
            const { notificationId } = req.params;
            const userId = req.user?.userId;

            if (!userId) {
                console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Unauthorized: User not authenticated"); // DEBUG
                res.status(401).json({ message: 'Unauthorized: User not authenticated' });
                return;
            }

            const notification = await this.notificationRepository.findById(notificationId);
            if (!notification) {
                console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Notification not found"); // DEBUG
                res.status(404).json({ message: 'Notification not found' });
                return;
            }

            if (notification.userId !== userId) {
                console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: User attempted to access unowned notification"); // DEBUG
                this.logger.logWarn(`User ${req.user?.username} attempted to access unowned notification ${notificationId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this notification' });
                return;
            }

            notification.isRead = true;
            const success = await this.notificationRepository.markAsRead(notificationId, userId);
            if (!success) {
                console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Failed to mark as read"); // DEBUG
                res.status(500).json({ message: 'Failed to mark notification as read' });
                return;
            }
            console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Notification marked as read"); // DEBUG
            res.status(200).json({ ...notification, read: true });
        } catch (error) {
            console.error("NOTIFICATION_CONTROLLER_MARK_AS_READ: Caught error in try block", error); // DEBUG
            this.logger.logError(`Error in markAsRead ${req.params.notificationId}: ${error}`);
            next(error);
        }
    }
}
