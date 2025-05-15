import { Router } from 'express';
import { DeviceController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware } from '../middlewares';

export function createDeviceRouter(
    deviceController: DeviceController,
    authMiddleware: AuthMiddleware,
    attachContextMiddleware: AttachContextMiddleware
): Router {
    const router = Router();

    // All device routes require authentication
    router.use(authMiddleware.authenticateToken.bind(authMiddleware));
    // Attach full user context after authentication
    router.use(attachContextMiddleware.attachFullUser.bind(attachContextMiddleware));

    // Create a new device
    router.post(
        '/',
        deviceController.createDevice.bind(deviceController)
    );

    // Get all devices for the authenticated user (or all if admin, handled by controller)
    router.get(
        '/',
        deviceController.listDevices.bind(deviceController) 
    );

    // Get a specific device by ID
    router.get(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware), // Attach device context here
        deviceController.getDeviceById.bind(deviceController)
    );

    // Send a command to a device
    router.post(
        '/:deviceId/command',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware), // Attach device context here
        deviceController.sendCommand.bind(deviceController)
    );

    // Update a device
    router.put(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.updateDevice.bind(deviceController)
    );

    // Delete a device
    router.delete(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.deleteDevice.bind(deviceController)
    );

    return router;
}
