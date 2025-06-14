/*
    * Home Control Hub
    * 
    * This file contains the middleware classes for the Home Control Hub application.
    * Each middleware class is responsible for a specific functionality within the application.
    *
*/

import { Config, Logger } from './infrastructure';
import { UserRole_ENUM } from './enums';
import { AuthService, AuthTokenPayload } from './services'; // Assuming AuthTokenPayload is exported
import { UserRepository, DeviceRepository } from './repositories'; // For fetching full user/device
import { User, Device } from './entities';

import { Request, Response, NextFunction } from 'express';

// Extend Express Request type
declare global {
    namespace Express {
        interface Request {
            user?: AuthTokenPayload; // Payload from JWT
            fullUser?: User;         // Full user entity from DB
            device?: Device;         // Device entity from DB
        }
    }
}

export class AuthMiddleware {
    private authService: AuthService;
    private logger: Logger;

    constructor(authService: AuthService) {
        this.authService = authService;
        this.logger = Logger.getInstance();
    }

    public authenticateToken(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        console.error("AUTH_MIDDLEWARE_AUTHENTICATE_TOKEN: Entry"); // DEBUG
        if (!token) {
            console.error("AUTH_MIDDLEWARE_AUTHENTICATE_TOKEN: Token missing"); // DEBUG
            this.logger.logInfo('Authentication token missing');
            res.status(401).json({ message: 'Unauthorized: Token missing' });
            return;
        }

        const userPayload = this.authService.verifyJWT(token);
        if (!userPayload) {
            console.error("AUTH_MIDDLEWARE_AUTHENTICATE_TOKEN: Invalid or expired token"); // DEBUG
            this.logger.logInfo('Invalid or expired token');
            res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
            return;
        }

        console.error("AUTH_MIDDLEWARE_AUTHENTICATE_TOKEN: User payload verified"); // DEBUG
        req.user = userPayload;
        this.logger.logDebug(`User ${userPayload.username} (ID: ${userPayload.userId}) authenticated.`);
        next();
    }
}

export class AttachContextMiddleware {
    private userRepository: UserRepository;
    private deviceRepository: DeviceRepository;
    private logger: Logger;

    constructor(userRepository: UserRepository, deviceRepository: DeviceRepository) {
        this.userRepository = userRepository;
        this.deviceRepository = deviceRepository;
        this.logger = Logger.getInstance();
    }

    // Attaches the full User entity to the request
    public async attachFullUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("AUTH_MIDDLEWARE_ATTACH_FULL_USER: Entry"); // DEBUG
        if (!req.user || !req.user.userId) {
            console.error("AUTH_MIDDLEWARE_ATTACH_FULL_USER: No user or user ID"); // DEBUG
            this.logger.logWarn('attachFullUser called without JWT user context.');
            // Depending on strictness, could fail or just pass through
            return next(); 
        }
        try {
            console.error("AUTH_MIDDLEWARE_ATTACH_FULL_USER: Attempting to find user by ID"); // DEBUG
            const fullUser = await this.userRepository.findById(req.user.userId);
            if (fullUser) {
                console.error("AUTH_MIDDLEWARE_ATTACH_FULL_USER: User found"); // DEBUG
                req.fullUser = fullUser;
                this.logger.logDebug(`Attached full user object for ${fullUser.username}`);
            } else {
                this.logger.logWarn(`User with ID ${req.user.userId} from token not found in DB.`);
                 // This could be a security concern (valid token for non-existent user)
                 // For now, just proceed without attaching fullUser
            }
            next();
        } catch (error) {
            console.error("AUTH_MIDDLEWARE_ATTACH_FULL_USER: Error attaching full user", error); // DEBUG
            this.logger.logError(`Error attaching full user: ${error}`);
            next(error); // Pass error to Express error handler
        }
    }

    // Attaches a Device entity if deviceId is present in route params
    public async attachDevice(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: Entry"); // DEBUG
        const deviceId = req.params.deviceId;
        if (!deviceId) {
            console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: No device ID"); // DEBUG
            // This middleware should only be used on routes with :deviceId param
            return next(); 
        }

        try {
            console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: Attempting to find device by ID"); // DEBUG
            const device = await this.deviceRepository.findById(deviceId);
            if (device) {
                console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: Device found"); // DEBUG
                req.device = device;
                this.logger.logDebug(`Attached device ${device.name} (ID: ${deviceId})`);
            } else {
                console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: Device not found"); // DEBUG
                this.logger.logInfo(`Device with ID ${deviceId} not found.`);
                res.status(404).json({ message: 'Device not found' });
                return; // Stop further processing if device not found
            }
            next();
        } catch (error) {
            console.error("AUTH_MIDDLEWARE_ATTACH_DEVICE: Error attaching device", error); // DEBUG
            this.logger.logError(`Error attaching device ${deviceId}: ${error}`);
            next(error);
        }
    }
}

export class RBACMiddleware {
    private logger: Logger;

    constructor() {
        this.logger = Logger.getInstance();
    }

    // Factory for role checking middleware
    public checkRole(requiredRoles: UserRole_ENUM | UserRole_ENUM[]) {
        console.error("RBAC_MIDDLEWARE_CHECK_ROLE: Entry"); // DEBUG
        return (req: Request, res: Response, next: NextFunction) => {
            console.error("RBAC_MIDDLEWARE_CHECK_ROLE: Inside middleware"); // DEBUG
            if (!req.user || !req.user.role) {
                console.error("RBAC_MIDDLEWARE_CHECK_ROLE: User or user role not found on request"); // DEBUG
                this.logger.logWarn('RBAC checkRole: User or user role not found on request. Ensure AuthMiddleware runs first.');
                res.status(403).json({ message: 'Forbidden: User role not available for RBAC check.' });
                return;
            }

            const userRole = req.user.role;
            const rolesToCheck = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

            if (rolesToCheck.includes(userRole)) {
                console.error("RBAC_MIDDLEWARE_CHECK_ROLE: User authorized"); // DEBUG
                this.logger.logDebug(`RBAC: User ${req.user.username} with role ${userRole} authorized for roles ${rolesToCheck.join(',')}.`);
                next();
            } else {
                console.error("RBAC_MIDDLEWARE_CHECK_ROLE: User denied access"); // DEBUG
                this.logger.logInfo(`RBAC: User ${req.user.username} with role ${userRole} denied access. Required roles: ${rolesToCheck.join(',')}.`);
                res.status(403).json({ message: 'Forbidden: Insufficient permissions.' });
            }
        };
    }
}
