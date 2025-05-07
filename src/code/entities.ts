/*
    * Home Control Hub
    * 
    * This file contains the entity classes for the Home Control Hub application.
    * Each entity class represents a specific object within the application.
    *
*/

import { AutomationRule } from './services';
import { UserRole_ENUM } from './enums';



export class Command {
    private name: string;
    private payload: JSON;

    constructor(name: string, payload: JSON) {
        this.payload = payload;
        this.name = name;
    }
}

export class Device {
    private id: string;
    private name: string;
    private type: string;
    private status: boolean;
    private aesKey: string;
    private lastKnownState: JSON;

    private automationRule!: AutomationRule;

    constructor(
        id: string,
        name: string,
        type: string,
        status: boolean,
        aesKey: string,
        lastKnownState: JSON
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.aesKey = aesKey;
        this.lastKnownState = lastKnownState;
    }

    public checkFirmwareVersion(): string {
        // Method not implemented
        return '';
    }

    public registerDevice(): void {
        // Method not implemented
    }

    public updateStatus(newStatus: boolean): void {
        // Method not implemented
    }

    public handleCommand(cmd: Command): void {
        // Method not implemented
    }

    public getInfo(): string {
        // Method not implemented
        return '';
    }

    public static create(): Device {
        // Method not implemented
        return new Device('', '', '', false, '', JSON.parse('{}'));
    }

    public static findByPk(id: string): Device {
        // Method not implemented
        return new Device('', '', '', false, '', JSON.parse('{}'));
    }
}

export class User {
    private id: string;
    private username: string;
    private passwordHash: string;
    private role: UserRole_ENUM;

    constructor(id: string, username: string, passwordHash: string, role: UserRole_ENUM) {
        this.id = id;
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
    }

    public getUsername(): string {
        // Method not implemented
        return '';
    }

    public setUsername(username: string): void {
        // Method not implemented
    }

    public setPassword(password: string): void {
        // Method not implemented
    }

    public checkPassword(password: string): boolean {
        // Method not implemented
        return false;
    }

    public getRole(): UserRole_ENUM {
        // Method not implemented
        return this.role;
    }

    public setRole(role: UserRole_ENUM): void {
        // Method not implemented
    }

    public static create(): User {
        // Method not implemented
        return new User('', '', '', UserRole_ENUM.STANDARD_USER);
    }

    public static findByUsername(username: string): User {
        // Method not implemented
        return new User('', '', '', UserRole_ENUM.STANDARD_USER);
    }
}
