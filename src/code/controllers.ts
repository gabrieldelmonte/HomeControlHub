/*
    * Home Control Hub
    * 
    * This file contains the controller classes for the Home Control Hub application.
    * Each controller class is responsible for a specific functionality within the application.
    *
*/

import { DeviceRepository, UserRepository } from './repositories';
import { AuthService, MQTTService, AuthTokenPayload } from './services';
import { User, Device, Command } from './entities';
import { UserRole_ENUM } from './enums';
import { Logger } from './infrastructure';

import { Request, Response, NextFunction } from 'express';

export class DeviceController {
    private deviceRepository: DeviceRepository;
    private mqttService: MQTTService;
    private logger: Logger;

    constructor(deviceRepository: DeviceRepository, mqttService: MQTTService) {
        this.deviceRepository = deviceRepository;
        this.mqttService = mqttService;
        this.logger = Logger.getInstance();
    }

    public async createDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, type, aesKey, status, lastKnownState } = req.body;
            if (!name || !type || !aesKey) {
                res.status(400).json({ message: 'Missing required fields: name, type, aesKey' });
                return;
            }
            if (!req.user || !req.user.userId) {
                 res.status(401).json({ message: 'Unauthorized: User not authenticated' });
                 return;
            }

            const newDevice = await this.deviceRepository.add({
                name,
                type,
                status: typeof status === 'boolean' ? status : false,
                aesKey,
                lastKnownState: lastKnownState || {},
                ownerId: req.user.userId,
            });

            if (newDevice) {
                res.status(201).json(newDevice);
            } else {
                res.status(500).json({ message: 'Failed to create device' });
            }
        } catch (error) {
            this.logger.logError(`Error in createDevice: ${error}`);
            next(error);
        }
    }

    public async updateDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const deviceId = req.params.deviceId;
            if (!req.device) {
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
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
                res.status(200).json(updatedDevice);
            } else {
                res.status(404).json({ message: 'Device not found or update failed' });
            }
        } catch (error) {
            this.logger.logError(`Error in updateDevice ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async deleteDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const deviceId = req.params.deviceId;
            if (!req.device) {
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                this.logger.logWarn(`User ${req.user?.username} attempting to delete unowned device ${deviceId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }

            const success = await this.deviceRepository.delete(deviceId);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Device not found or deletion failed' });
            }
        } catch (error) {
            this.logger.logError(`Error in deleteDevice ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async listDevices(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let devices: Device[] = [];
            if (req.user?.role === UserRole_ENUM.ADMIN) {
                devices = await this.deviceRepository.findAll();
            } else if (req.user?.userId) {
                devices = await this.deviceRepository.findByOwnerId(req.user.userId);
            } else {
                // Unauthenticated users see no devices, or handle as error based on policy
                // For now, returns empty list. Could also be a 401.
                 res.status(401).json({ message: 'Unauthorized: Authentication required to list devices'});
                 return;
            }
            res.status(200).json(devices);
        } catch (error) {
            this.logger.logError(`Error in listDevices: ${error}`);
            next(error);
        }
    }
    
    public async getDeviceById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            if (!req.device) {
                 res.status(404).json({ message: 'Device not found' });
                 return;
            }
             if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                this.logger.logWarn(`User ${req.user?.username} attempt to access unowned device ${req.device.id}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }
            res.status(200).json(req.device);
        } catch (error) {
            this.logger.logError(`Error in getDeviceById ${req.params.deviceId}: ${error}`);
            next(error);
        }
    }

    public async sendCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const deviceId = req.params.deviceId;
            const { commandName, payload } = req.body;

            if (!req.device) {
                res.status(404).json({ message: 'Device not found' });
                return;
            }
            if (req.user?.role !== UserRole_ENUM.ADMIN && req.device.ownerId !== req.user?.userId) {
                this.logger.logWarn(`User ${req.user?.username} attempt to command unowned device ${deviceId}`);
                res.status(403).json({ message: 'Forbidden: You do not own this device' });
                return;
            }
            if (!commandName || typeof payload === 'undefined') {
                res.status(400).json({ message: 'Missing commandName or payload' });
                return;
            }

            await this.mqttService.publishCommand(deviceId, commandName, payload);
            res.status(202).json({ message: `Command '${commandName}' sent to device ${deviceId}` });
        } catch (error) {
            this.logger.logError(`Error in sendCommand to device ${req.params.deviceId}: ${error}`);
            if (error instanceof Error && error.message.includes("not found")) {
                 res.status(404).json({ message: error.message });
            } else {
                 next(error);
            }
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
        try {
            if (!req.fullUser) {
                res.status(401).json({ message: 'Unauthorized or user data not available' });
                return;
            }
            const userProfile = {
                id: req.fullUser.id,
                username: req.fullUser.username,
                role: req.fullUser.role
            };
            res.status(200).json(userProfile);
        } catch (error) {
            this.logger.logError(`Error in getProfile for user ${req.user?.userId}: ${error}`);
            next(error);
        }
    }

    public async listUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users = await this.userRepository.findAll();
            const safeUsers = users.map(u => ({ 
                id: u.id,
                username: u.username,
                role: u.role
            }));
            res.status(200).json(safeUsers);
        } catch (error) {
            this.logger.logError(`Error in listUsers: ${error}`);
            next(error);
        }
    }

    public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.userId;
            const user = await this.userRepository.findById(userId);
            if (!user) {
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
            this.logger.logError(`Error in getUserById for ${req.params.userId}: ${error}`);
            next(error);
        }
    }
}

export class AuthController {
    private userRepository: UserRepository;
    private authService: AuthService;
    private logger: Logger;

    constructor(userRepository: UserRepository, authService: AuthService) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.logger = Logger.getInstance();
    }

    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { username, password, role } = req.body;
            if (!username || !password) {
                res.status(400).json({ message: 'Username and password are required' });
                return;
            }

            const existingUser = await this.userRepository.findByUsername(username);
            if (existingUser) {
                res.status(409).json({ message: 'Username already exists' });
                return;
            }

            const passwordHash = await this.authService.hashPassword(password);
            
            let newRole = UserRole_ENUM.STANDARD_USER; // Default
            if (role && Object.values(UserRole_ENUM).includes(role)) {
                if (role === UserRole_ENUM.ADMIN) {
                    // Only an existing admin can register another admin
                    if (req.user?.role === UserRole_ENUM.ADMIN) {
                        newRole = UserRole_ENUM.ADMIN;
                    } else {
                        this.logger.logWarn(`Non-admin user ${req.user?.username} attempt to register new ADMIN. Defaulting to STANDARD_USER.`);
                        // newRole remains STANDARD_USER (or could return an error)
                    }
                } else {
                    newRole = role; // Allow GUEST or STANDARD_USER if specified
                }
            }

            const newUserEntity = await this.userRepository.add({
                username,
                passwordHash,
                role: newRole,
            });

            if (newUserEntity) {
                const userResponse = { 
                    id: newUserEntity.id, 
                    username: newUserEntity.username, 
                    role: newUserEntity.role 
                };
                res.status(201).json(userResponse);
            } else {
                res.status(500).json({ message: 'Failed to register user' });
            }
        } catch (error) {
            this.logger.logError(`Error in user registration: ${error}`);
            next(error);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).json({ message: 'Username and password are required' });
                return;
            }

            const user = await this.userRepository.findByUsername(username);
            if (!user) {
                res.status(401).json({ message: 'Invalid credentials - user not found' });
                return;
            }

            const isPasswordValid = await this.authService.comparePassword(password, user.getPasswordHash());
            if (!isPasswordValid) {
                res.status(401).json({ message: 'Invalid credentials - password mismatch' });
                return;
            }

            const token = this.authService.generateJWT(user);
            res.status(200).json({ 
                token, 
                user: { 
                    id: user.id, 
                    username: user.username, 
                    role: user.role 
                } 
            });
        } catch (error) {
            this.logger.logError(`Error in user login for ${req.body.username}: ${error}`);
            next(error);
        }
    }
}
