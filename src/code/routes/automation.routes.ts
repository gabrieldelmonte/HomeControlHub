import { Router } from 'express';
import { AutomationController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware } from '../middlewares';

export function createAutomationRouter(
    automationController: AutomationController,
    authMiddleware: AuthMiddleware,
    attachContextMiddleware: AttachContextMiddleware
): Router {
    const router = Router();

    // Apply authentication and context middleware to all routes
    router.use(authMiddleware.authenticateToken.bind(authMiddleware));
    router.use(attachContextMiddleware.attachFullUser.bind(attachContextMiddleware));

    /**
     * @swagger
     * /api/v1/automation/devices/{deviceId}/rules:
     *   post:
     *     summary: Create a new automation rule for a device
     *     tags: [Automation]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *         description: The device ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: Name of the automation rule
     *               triggerCondition:
     *                 type: string
     *                 description: Condition that triggers the rule (e.g., "payload.temperature > 25")
     *               action:
     *                 type: string
     *                 description: Action to perform when triggered
     *             required:
     *               - name
     *               - triggerCondition
     *               - action
     *     responses:
     *       201:
     *         description: Automation rule created successfully
     *       400:
     *         description: Missing required fields
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Access denied
     *       404:
     *         description: Device not found
     */
    router.post('/devices/:deviceId/rules', automationController.createRule.bind(automationController));

    /**
     * @swagger
     * /api/v1/automation/devices/{deviceId}/rules:
     *   get:
     *     summary: Get all automation rules for a device
     *     tags: [Automation]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *         description: The device ID
     *     responses:
     *       200:
     *         description: List of automation rules
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                   name:
     *                     type: string
     *                   triggerCondition:
     *                     type: string
     *                   action:
     *                     type: string
     *                   deviceId:
     *                     type: string
     *                   createdAt:
     *                     type: string
     *                     format: date-time
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Access denied
     *       404:
     *         description: Device not found
     */
    router.get('/devices/:deviceId/rules', automationController.getRulesByDevice.bind(automationController));

    /**
     * @swagger
     * /api/v1/automation/rules/{ruleId}:
     *   delete:
     *     summary: Delete an automation rule
     *     tags: [Automation]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: ruleId
     *         required: true
     *         schema:
     *           type: string
     *         description: The rule ID
     *     responses:
     *       200:
     *         description: Automation rule deleted successfully
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Access denied
     *       404:
     *         description: Rule not found
     */
    router.delete('/rules/:ruleId', automationController.deleteRule.bind(automationController));

    /**
     * @swagger
     * /api/v1/automation/devices/{deviceId}/commands:
     *   post:
     *     summary: Send an MQTT command to a device
     *     tags: [Automation]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: deviceId
     *         required: true
     *         schema:
     *           type: string
     *         description: The device ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               command:
     *                 type: object
     *                 properties:
     *                   name:
     *                     type: string
     *                     description: Command name
     *                   payload:
     *                     type: object
     *                     description: Command payload
     *                 required:
     *                   - name
     *                   - payload
     *             required:
     *               - command
     *           example:
     *             command:
     *               name: "setPower"
     *               payload:
     *                 status: true
     *     responses:
     *       200:
     *         description: Command sent successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 topic:
     *                   type: string
     *                 command:
     *                   type: object
     *                 timestamp:
     *                   type: string
     *                   format: date-time
     *       400:
     *         description: Missing required fields
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Access denied
     *       404:
     *         description: Device not found
     *       500:
     *         description: Failed to send MQTT command
     */
    router.post('/devices/:deviceId/commands', automationController.sendMQTTCommand.bind(automationController));

    return router;
}
