import { Router } from 'express';
import { AuthController, UserController, DeviceController, NotificationController, AutomationController, SupportController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from '../middlewares';

import { createAuthRouter } from './auth.routes';
import { createUserRouter } from './user.routes';
import { createDeviceRouter } from './device.routes';
import { createNotificationRouter } from './notification.routes';
import { createAutomationRouter } from './automation.routes';
import { createSupportRouter } from './support.routes';

interface ApiRouterDependencies {
    authController: AuthController;
    userController: UserController;
    deviceController: DeviceController;
    notificationController: NotificationController;
    automationController: AutomationController;
    supportController: SupportController;
    authMiddleware: AuthMiddleware;
    attachContextMiddleware: AttachContextMiddleware;
    rbacMiddleware: RBACMiddleware;
}

export function createApiRouter(dependencies: ApiRouterDependencies): Router {
    const apiRouter = Router();

    const authRouter = createAuthRouter(dependencies.authController);
    const userRouter = createUserRouter(
        dependencies.userController,
        dependencies.authMiddleware,
        dependencies.attachContextMiddleware,
        dependencies.rbacMiddleware
    );
    const deviceRouter = createDeviceRouter(
        dependencies.deviceController,
        dependencies.authMiddleware,
        dependencies.attachContextMiddleware
    );
    const notificationRouter = createNotificationRouter(
        dependencies.notificationController,
        dependencies.authMiddleware,
        dependencies.attachContextMiddleware
    );
    const automationRouter = createAutomationRouter(
        dependencies.automationController,
        dependencies.authMiddleware,
        dependencies.attachContextMiddleware
    );
    const supportRouter = createSupportRouter(
        dependencies.supportController,
        dependencies.authMiddleware,
        dependencies.attachContextMiddleware,
        dependencies.rbacMiddleware
    );

    apiRouter.use('/auth', authRouter);
    apiRouter.use('/users', userRouter);
    apiRouter.use('/devices', deviceRouter);
    apiRouter.use('/notifications', notificationRouter);
    apiRouter.use('/automation', automationRouter);
    apiRouter.use('/support', supportRouter);

    return apiRouter;
}
