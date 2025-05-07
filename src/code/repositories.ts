/*
    * Home Control Hub
    * 
    * This file contains the repository classes for the Home Control Hub application.
    * Each repository class is responsible for data access and manipulation for a specific entity.
    *
*/

import { Database } from './infrastructure';
import { Device, User } from './entities';



export class DeviceRepository {
    private userRepository!: UserRepository;

    add(device: Device): void {
        // Method not implemented
    }

    update(device: Device): void {
        // Method not implemented
    }

    delete(id: string): void {
        // Method not implemented
    }

    findById(id: string): Device {
        // Method not implemented
        return {} as Device;
    }
}

export class UserRepository {
    private database!: Database;

    add(user: User): void {
        // Method not implemented
    }

    update(user: User): void {
        // Method not implemented
    }

    delete(id: string): void {
        // Method not implemented
    }

    findByUsername(username: string): User {
        // Method not implemented
        return {} as User;
    }
}
