import { Router } from 'express';
import { AuthController, UserController, DeviceController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from '../middlewares';

import { createAuthRouter } from './auth.routes';
import { createUserRouter } from './user.routes';
import { createDeviceRouter } from './device.routes';

interface ApiRouterDependencies {
    authController: AuthController;
    userController: UserController;
    deviceController: DeviceController;
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

    apiRouter.use('/auth', authRouter);
    apiRouter.use('/users', userRouter);
    apiRouter.use('/devices', deviceRouter);

    return apiRouter;
}
