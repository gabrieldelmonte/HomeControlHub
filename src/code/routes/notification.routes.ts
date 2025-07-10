import { Router } from 'express';
import { NotificationController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware } from '../middlewares';

/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       required:
 *         - id
 *         - message
 *         - type
 *         - userId
 *         - read
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the notification
 *         message:
 *           type: string
 *           description: The notification message content
 *         type:
 *           type: string
 *           description: The notification type
 *           enum: [WELCOME, DEVICE_ADDED, CRITICAL, SYSTEM, ADMIN]
 *         userId:
 *           type: string
 *           description: The ID of the user who owns the notification
 *         read:
 *           type: boolean
 *           description: Whether the notification has been read
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the notification was created
 *       example:
 *         id: "550e8400-e29b-41d4-a716-446655440000"
 *         message: "Welcome to Home Control Hub!"
 *         type: "WELCOME"
 *         userId: "123e4567-e89b-12d3-a456-426614174000"
 *         read: false
 *         createdAt: "2025-07-09T10:00:00.000Z"
 */

export function createNotificationRouter(
    notificationController: NotificationController,
    authMiddleware: AuthMiddleware,
    attachContextMiddleware: AttachContextMiddleware
): Router {
    const router = Router();

    // Apply authentication middleware to all notification routes
    router.use(authMiddleware.authenticateToken.bind(authMiddleware));
    router.use(attachContextMiddleware.attachFullUser.bind(attachContextMiddleware));

    /**
     * @swagger
     * /api/v1/notifications:
     *   get:
     *     summary: Get user's notifications
     *     description: Retrieve all notifications for the authenticated user (only available for standard users)
     *     tags: [Notifications]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of user notifications
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Notification'
     *       401:
     *         description: Unauthorized - Invalid or missing token
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Unauthorized: User not authenticated"
     *       500:
     *         description: Internal server error
     */
    router.get('/', notificationController.listNotifications.bind(notificationController));

    /**
     * @swagger
     * /api/v1/notifications/{notificationId}/read:
     *   put:
     *     summary: Mark notification as read
     *     description: Mark a specific notification as read for the authenticated user
     *     tags: [Notifications]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: notificationId
     *         required: true
     *         description: The unique identifier of the notification
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Notification marked as read successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Notification'
     *       401:
     *         description: Unauthorized - Invalid or missing token
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Unauthorized: User not authenticated"
     *       403:
     *         description: Forbidden - User doesn't own this notification
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Forbidden: You do not own this notification"
     *       404:
     *         description: Notification not found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Notification not found"
     *       500:
     *         description: Internal server error
     */
    router.put('/:notificationId/read', notificationController.markAsRead.bind(notificationController));

    return router;
}
