/*
    * Home Control Hub
    * 
    * This file contains the controller classes for the Home Control Hub application.
    * Each controller class is responsible for a specific functionality within the application.
    *
*/

import { DeviceRepository, UserRepository } from './repositories';
import { AttachContextMiddleware } from './middlewares';
import { AuthService, MQTTService } from './services';
import { User } from './entities';

import { Request, Response } from 'express';



export class BaseController {
    private deviceController!: DeviceController;
    private userController!: UserController;
    private authController!: AuthController;

    handleRequest(req: Request, res: Response): void {
        // Method not implemented
    }
}

export class DeviceController extends BaseController {
    private attachContextMiddleware!: AttachContextMiddleware;
    private deviceRepository!: DeviceRepository;
    private mqttService!: MQTTService;

    createDevice(req: Request, res: Response): void {
        // Method not implemented
    }

    updateDevice(req: Request, res: Response): void {
        // Method not implemented
    }

    deleteDevice(req: Request, res: Response): void {
        // Method not implemented
    }

    listDevices(req: Request, res: Response): void {
        // Method not implemented
    }

    sendCommand(req: Request, res: Response): void {
        // Method not implemented
    }
}

export class UserController extends BaseController {
    private attachContextMiddleware!: AttachContextMiddleware;
    private userRepository!: UserRepository;
    private authService!: AuthService;

    registerUser(req: Request, res: Response): void {
        // Method not implemented
    }

    getProfile(req: Request, res: Response): void {
        // Method not implemented
    }
}

export class AuthController extends BaseController {
    private user!: User;

    login(req: Request, res: Response): void {
        // Method not implemented
    }

    register(req: Request, res: Response): void {
        // Method not implemented
    }
}
