/*
    * Home Control Hub
    * 
    * This file contains the infrastructure classes for the Home Control Hub application.
    * Each class is responsible for a specific aspect of the application's infrastructure.
    *
*/

import { PrismaClient } from '../db/prisma/generated/prisma-client';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class Config {
    private static instance: Config;
    private readonly jwtSecret: string;
    private readonly jwtExpiration: string; // Keep as string for '1h', '7d' etc.
    private readonly mqttBrokerUrl: string;
    private readonly mqttPort: number;
    private readonly encryptionAlgorithm: string;
    private readonly dbConnectionString: string; // For Prisma, often set in .env directly

    private constructor() {
        // Load .env file from project root
        const envPath = path.resolve(__dirname, '../../../../.env'); // Adjust path as needed
        if (fs.existsSync(envPath)) {
            dotenv.config({ path: envPath });
        } else {
            // Fallback or default values if .env is not found, or rely on process.env directly
            console.warn(".env file not found, relying on environment variables or defaults.");
        }

        this.jwtSecret = process.env.JWT_SECRET || "your-default-super-secret-key";
        this.jwtExpiration = process.env.JWT_EXPIRATION || "1h";
        this.mqttBrokerUrl = process.env.MQTT_BROKER_URL || "mqtt://localhost";
        this.mqttPort = parseInt(process.env.MQTT_PORT || "1883", 10);
        this.encryptionAlgorithm = process.env.ENCRYPTION_ALGORITHM || "aes-256-gcm";
        this.dbConnectionString = process.env.DATABASE_URL || "your-prisma-database-url"; // Prisma uses DATABASE_URL

        if (this.jwtSecret === "your-default-super-secret-key") {
            console.warn("Warning: JWT_SECRET is using a default insecure value. Please set it in your .env file.");
        }
    }

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    public getJwtSecret(): string { return this.jwtSecret; }
    public getJwtExpiration(): string { return this.jwtExpiration; }
    public getMqttBrokerUrl(): string { return this.mqttBrokerUrl; }
    public getMqttPort(): number { return this.mqttPort; }
    public getEncryptionAlgorithm(): string { return this.encryptionAlgorithm; }
    public getDbConnectionString(): string { return this.dbConnectionString; } // Though Prisma often handles this internally
}

export class Database {
    private static instance: Database;
    private prisma: PrismaClient;

    private constructor() {
        this.prisma = new PrismaClient(); // Prisma automatically loads DATABASE_URL from .env
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<void> {
        try {
            await this.prisma.$connect();
            Logger.getInstance().logInfo("Successfully connected to the database.");
        } catch (error) {
            Logger.getInstance().logError(`Database connection error: ${error}`);
            process.exit(1); // Exit if DB connection fails
        }
    }
    
    public async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
        Logger.getInstance().logInfo("Successfully disconnected from the database.");
    }

    // Provide direct access to Prisma delegates
    public get device() {
        return this.prisma.device;
    }

    public get user() {
        return this.prisma.user;
    }
}


export class Logger {
    private static instance: Logger;

    private constructor() {
        // Initialization for a more advanced logger could go here (e.g., Winston)
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public logInfo(message: string): void {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    }

    public logError(message: string | Error): void {
        if (message instanceof Error) {
            console.error(`[ERROR] ${new Date().toISOString()}: ${message.message}`, message.stack);
        } else {
            console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
        }
    }

    public logWarn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }

    public logDebug(message: string): void {
        // Could be conditional based on environment (e.g., process.env.NODE_ENV === 'development')
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
}
