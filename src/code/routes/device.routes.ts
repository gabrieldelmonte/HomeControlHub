import { Router } from 'express';
import { DeviceController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware } from '../middlewares';

/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: Device management and control
 */
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

    /**
     * @swagger
     * /devices:
     *   post:
     *     summary: Create a new device
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *               - type
     *               - location
     *               - mqttTopic
     *               - aesKey
     *             properties:
     *               name: { type: string, example: 'Living Room Lamp' }
     *               type: { type: string, example: 'SMART_LIGHT' }
     *               description: { type: string, example: 'Smart LED lamp with dimming capabilities' }
     *               location: { type: string, example: 'Living Room' }
     *               mqttTopic: { type: string, example: 'devices/livingroom/lamp' }
     *               aesKey: { type: string, example: 'supersecretdevicekey123' }
     *               status: { type: boolean, example: false, default: false }
     *     responses:
     *       201:
     *         description: Device created successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/Device' }
     *       400:
     *         description: Missing required fields
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       500:
     *         description: Failed to create device
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.post(
        '/',
        deviceController.createDevice.bind(deviceController)
    );

    /**
     * @swagger
     * /devices:
     *   get:
     *     summary: List devices for the authenticated user (or all if admin)
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: A list of devices
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/Device' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/',
        deviceController.listDevices.bind(deviceController) 
    );

    /**
     * @swagger
     * /devices/{deviceId}:
     *   get:
     *     summary: Get a specific device by its ID
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the device to retrieve.
     *     responses:
     *       200:
     *         description: Device data
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/Device' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden (not owner or admin)
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.getDeviceById.bind(deviceController)
    );

    /**
     * @swagger
     * /devices/{deviceId}/logs:
     *   get:
     *     summary: Get device activity logs
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: Device ID
     *       - in: query
     *         name: limit
     *         schema:
     *           type: integer
     *           default: 50
     *         description: Maximum number of logs to return
     *     responses:
     *       200:
     *         description: Device logs retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id: { type: string, format: uuid }
     *                   message: { type: string }
     *                   action: { type: string }
     *                   level: { type: string, enum: [INFO, WARNING, ERROR] }
     *                   timestamp: { type: string, format: date-time }
     *                   user: 
     *                     type: object
     *                     properties:
     *                       username: { type: string }
     *                       email: { type: string }
     *       403:
     *         description: Access denied - can only view logs for own devices
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/:deviceId/logs',
        deviceController.getDeviceLogs.bind(deviceController)
    );

    /**
     * @swagger
     * /devices/{deviceId}/command:
     *   post:
     *     summary: Send a command to a device
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the device to command.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - commandName
     *               - payload
     *             properties:
     *               commandName: { type: string, example: 'setPower' }
     *               payload: { type: object, additionalProperties: true, example: { state: 'ON' } }
     *     responses:
     *       202:
     *         description: Command accepted for processing
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message: { type: string }
     *       400:
     *         description: Missing commandName or payload
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden (not owner or admin)
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.post(
        '/:deviceId/command',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.sendCommand.bind(deviceController)
    );

    /**
     * @swagger
     * /devices/{deviceId}:
     *   put:
     *     summary: Update an existing device
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the device to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name: { type: string, example: 'Updated Living Room Lamp' }
     *               type: { type: string, example: 'SMART_LIGHT_PLUS' }
     *               description: { type: string, example: 'Updated smart LED lamp with color changing' }
     *               location: { type: string, example: 'Living Room' }
     *               mqttTopic: { type: string, example: 'devices/livingroom/lamp_updated' }
     *               status: { type: boolean, example: true }
     *               aesKey: { type: string, example: 'newsupersecretdevicekey456' }
     *     responses:
     *       200:
     *         description: Device updated successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/Device' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden (not owner or admin)
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found or update failed
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.put(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.updateDevice.bind(deviceController)
    );

    /**
     * @swagger
     * /devices/{deviceId}:
     *   delete:
     *     summary: Delete a device
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the device to delete.
     *     responses:
     *       204:
     *         description: Device deleted successfully (No Content)
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden (not owner or admin)
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found or deletion failed
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.delete(
        '/:deviceId',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.deleteDevice.bind(deviceController)
    );

    /**
     * @swagger
     * /devices/{deviceId}/status:
     *   put:
     *     summary: Update device status (on/off)
     *     tags: [Devices]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the device to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - status
     *             properties:
     *               status: { type: boolean, example: true }
     *     responses:
     *       200:
     *         description: Device status updated successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/Device' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden (not owner or admin)
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Device not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.put(
        '/:deviceId/status',
        attachContextMiddleware.attachDevice.bind(attachContextMiddleware),
        deviceController.updateDeviceStatus.bind(deviceController)
    );

    return router;
}
