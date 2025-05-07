/*
    * Home Control Hub
    * 
    * This file contains the middleware classes for the Home Control Hub application.
    * Each middleware class is responsible for a specific functionality within the application.
    *
*/

import { Config } from './infrastructure';
import { UserRole_ENUM } from './enums';

import { Request, Response, NextFunction } from 'express';



export class AuthMiddleware {
    private config!: Config;
    private attachContextMiddleware!: AttachContextMiddleware;

    authenticateToken(req: Request, res: Response, next: NextFunction): void {
        // Method not implemented
    }
}

export class AttachContextMiddleware {
    attachUser(req: Request, res: Response, next: NextFunction): void {
        // Method not implemented
    }

    attachDevice(req: Request, res: Response, next: NextFunction): void {
        // Method not implemented
    }
}

export class RBACMiddleware {
    checkRole(requiredRole: UserRole_ENUM): void {
        // Method not implemented
    }
}
