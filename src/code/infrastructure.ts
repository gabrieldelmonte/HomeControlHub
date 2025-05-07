/*
    * Home Control Hub
    * 
    * This file contains the infrastructure classes for the Home Control Hub application.
    * Each class is responsible for a specific aspect of the application's infrastructure.
    *
*/

import { UserController, DeviceController } from "./controllers";
import { DeviceRepository, UserRepository } from "./repositories";
import { Device, User } from "./entities";
import { AuthService } from "./services";

import { PrismaClient } from '../db/prisma/generated/prisma-client';



export class Config {
    private static instance: Config;
    private jwtSecret!: string;
    private jwtExpiration!: number;
    private mqttBrokerUrl!: string;
    private mqttPort!: number;
    private encryptionAlgorithm!: string;
    private sslCertificatePath!: string;
    private sslKeyPath!: string;
    private dbConnectionString!: string;

    private constructor() {

    }

    public static getInstance(): Config {
        // Implementation placeholder
        return this.instance;
    }

    public loadConfig(): void {
        // Implementation placeholder
    }
}

export class Database {
    private static instance: Database;
    private connection: any;
    private prisma: PrismaClient;

    private deviceRepository!: DeviceRepository;
    private userRepository!: UserRepository;
    private device!: Device;
    private user!: User;

    private constructor() {
        this.prisma = new PrismaClient();
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<void> {
        await this.prisma.$connect();
    }
    
    public async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }

    public getDeviceModel(): any {
        // Replace `any` with the appropriate type for your device model
        // Implementation placeholder
    }

    public getUserModel(): any {
        // Replace `any` with the appropriate type for your user model
        // Implementation placeholder
    }
}


export class Logger {
    private deviceController!: DeviceController;
    private userController!: UserController;
    private authService!: AuthService;

    private static instance: Logger;

    private constructor() {
        // Implementation placeholder
    }

    public static getInstance(): Logger {
        // Implementation placeholder
        return this.instance;
    }

    public logInfo(message: string): void {
        // Implementation placeholder
    }

    public logError(error: string): void {
        // Implementation placeholder
    }
}
