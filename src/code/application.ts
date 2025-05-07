/*
    * Home Control Hub
    * 
    * This file contains the main application logic for the Home Control Hub.
    * It initializes the server and database, and starts the application.
    *
*/


import { AuthController, DeviceController, UserController } from './controllers';
import { AuthMiddleware } from './middlewares';
import { Config, Database } from './infrastructure';

import { WebSocketServer } from 'ws';
import { Express } from 'express';



export class App {
    private database!: Database;
    private server!: Server;

    public start(): void {
        // Method implementation goes here
    }
}

export class Server {
    private deviceController!: DeviceController;
    private authMiddleware!: AuthMiddleware;
    private authController!: AuthController;
    private userController!: UserController;
    private config!: Config;
    private express!: Express;

    public configureMiddleware(): void {
        // Method implementation goes here
    }

    public setupRoutes(): void {
        // Method implementation goes here
    }

    public startServer(port: number): void {
        // Method implementation goes here
    }

    public attachWebsocketServer(ws: WebSocketServer): void {
        // Method implementation goes here
    }
}
