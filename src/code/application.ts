/*
    * Home Control Hub
    * 
    * This file contains the main application logic for the Home Control Hub.
    * It initializes the server and database, and starts the application.
    *
*/


import express, { Express, Request, Response, NextFunction, Router } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { AuthController, DeviceController, UserController } from './controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from './middlewares';
import { Config, Database, Logger } from './infrastructure';
import { UserRepository, DeviceRepository } from './repositories';
import { 
    AuthService, 
    MQTTConnection,
    MQTTService, 
    EncryptionService, 
    AutomationService, 
    NotificationService,
    AutomationRule
} from './services';
import { Command } from './entities';
import { UserRole_ENUM } from './enums';
import { createApiRouter } from './routes';
import { swaggerSpec } from './swagger/swaggerConfig';

export class App {
    private server: ServerInstance;
    private logger: Logger;

    constructor() {
        this.logger = Logger.getInstance();
        const config = Config.getInstance();
        const database = Database.getInstance();
        
        const userRepository = new UserRepository();
        const deviceRepository = new DeviceRepository();

        const authService = new AuthService(userRepository);
        const encryptionService = new EncryptionService();
        const mqttConnection = new MQTTConnection();
        const mqttService = new MQTTService(mqttConnection, deviceRepository, encryptionService);
        const notificationService = new NotificationService();
        const automationService = new AutomationService(notificationService, userRepository);
        
        mqttService.setAutomationService(automationService);
        automationService.setMqttService(mqttService);

        const authMiddleware = new AuthMiddleware(authService);
        const attachContextMiddleware = new AttachContextMiddleware(userRepository, deviceRepository);
        const rbacMiddleware = new RBACMiddleware();

        const authController = new AuthController(userRepository, authService);
        const userController = new UserController(userRepository, authService);
        const deviceController = new DeviceController(deviceRepository, mqttService);

        this.server = new ServerInstance(
            config,
            database,
            mqttService,
            authController,
            userController,
            deviceController,
            authMiddleware,
            attachContextMiddleware,
            rbacMiddleware
        );
    }

    public async start(): Promise<void> {
        try {
            const port = parseInt(process.env.PORT || "3000", 10);
            await this.server.startServer(port);
            this.logger.logInfo(`Application started successfully on port ${port}.`);
            this.logger.logInfo(`Swagger UI available at http://localhost:${port}/api-docs`);
        } catch (error) {
            this.logger.logError(`Failed to start application: ${error}`);
            process.exit(1);
        }
    }
}

class ServerInstance {
    private expressApp: Express;
    private httpServer: HttpServer;
    private wss: WebSocketServer | null = null;
    private logger: Logger;
    private config: Config;
    private database: Database;
    private mqttService: MQTTService;

    private authController: AuthController;
    private userController: UserController;
    private deviceController: DeviceController;
    private authMiddleware: AuthMiddleware;
    private attachContextMiddleware: AttachContextMiddleware;
    private rbacMiddleware: RBACMiddleware;

    constructor(
        config: Config,
        database: Database,
        mqttService: MQTTService,
        authController: AuthController,
        userController: UserController,
        deviceController: DeviceController,
        authMiddleware: AuthMiddleware,
        attachContextMiddleware: AttachContextMiddleware,
        rbacMiddleware: RBACMiddleware
    ) {
        this.logger = Logger.getInstance();
        this.config = config;
        this.database = database;
        this.mqttService = mqttService;
        this.authController = authController;
        this.userController = userController;
        this.deviceController = deviceController;
        this.authMiddleware = authMiddleware;
        this.attachContextMiddleware = attachContextMiddleware;
        this.rbacMiddleware = rbacMiddleware;

        this.expressApp = express();
        this.httpServer = createServer(this.expressApp);
        
        this.configureMiddleware();
        this.setupRoutes();
        this.configureGlobalErrorHandler();
    }

    private configureMiddleware(): void {
        this.expressApp.use(cors());
        this.expressApp.use(express.json());
        this.expressApp.use(express.urlencoded({ extended: true }));
        this.logger.logInfo("Global middlewares configured.");
    }

    private setupRoutes(): void {
        const apiRouter = createApiRouter({
            authController: this.authController,
            userController: this.userController,
            deviceController: this.deviceController,
            authMiddleware: this.authMiddleware,
            attachContextMiddleware: this.attachContextMiddleware,
            rbacMiddleware: this.rbacMiddleware
        });

        this.expressApp.use('/api/v1', apiRouter);
        this.logger.logInfo("API routes configured under /api/v1.");

        this.expressApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.logger.logInfo("Swagger UI configured at /api-docs.");

        this.expressApp.get('/health', (req: Request, res: Response) => {
            res.status(200).json({ status: 'UP' });
        });
    }

    private configureGlobalErrorHandler(): void {
        this.expressApp.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            this.logger.logError(`Global Error Handler: ${err.message}`);
            const errorResponse = {
                message: err.message || 'An unexpected error occurred',
                ...(process.env.NODE_ENV === 'development' ? { stack: err.stack ?? 'No stack available' } : {}),
            };
            if (res.headersSent) {
                return next(err);
            }
            res.status(500).json(errorResponse);
        });
        this.logger.logInfo("Global error handler configured.");
    }

    public async startServer(port: number): Promise<void> {
        try {
            await this.database.connect();
            await this.mqttService.initialize();
            
            this.httpServer.listen(port, () => {
                this.logger.logInfo(`HTTP Server listening on port ${port}`);
                this.attachWebsocketServer();
            });
        } catch (error) {
            this.logger.logError(`Error starting server: ${error}`);
            throw error;
        }
    }

    private attachWebsocketServer(): void {
        if (!this.httpServer) {
            this.logger.logError("HTTP server not initialized, cannot attach WebSocket server.");
            return;
        }
        this.wss = new WebSocketServer({ server: this.httpServer });
        this.logger.logInfo('WebSocket server attached to HTTP server.');

        this.wss.on('connection', (ws: WebSocket) => {
            this.logger.logInfo('New WebSocket client connected.');
            ws.send(JSON.stringify({ type: 'connection_ack', message: 'Successfully connected to HomeControlHub WebSocket' }));

            ws.on('message', (message: Buffer) => {
                this.logger.logDebug(`WebSocket received message: ${message.toString()}`);
                try {
                    const parsedMessage = JSON.parse(message.toString());
                    ws.send(JSON.stringify({ type: 'echo', data: parsedMessage }));
                } catch (e) {
                    ws.send(JSON.stringify({ type: 'error', message: 'Invalid JSON message' }));
                }
            });

            ws.on('close', () => {
                this.logger.logInfo('WebSocket client disconnected.');
            });

            ws.on('error', (error: Error) => {
                this.logger.logError(`WebSocket error: ${error.message}`);
            });
        });

        const broadcast = (type: string, data: any) => {
            if (this.wss) {
                this.wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type, data }));
                    }
                });
                this.logger.logDebug(`Broadcasted WebSocket message: type=${type}`);
            }
        };
        if (this.mqttService) {
            (this.mqttService as any)._setBroadcaster = broadcast;
        }
    }

    public getHttpServer(): HttpServer {
        return this.httpServer;
    }
}
