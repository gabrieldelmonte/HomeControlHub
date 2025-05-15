import { Router } from 'express';
import { UserController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from '../middlewares';
import { UserRole_ENUM } from '../enums';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and profile information
 */
export function createUserRouter(
    userController: UserController,
    authMiddleware: AuthMiddleware,
    attachContextMiddleware: AttachContextMiddleware,
    rbacMiddleware: RBACMiddleware
): Router {
    const router = Router();

    // Authenticate and attach full user context for all user routes
    router.use(authMiddleware.authenticateToken.bind(authMiddleware));
    router.use(attachContextMiddleware.attachFullUser.bind(attachContextMiddleware));

    /**
     * @swagger
     * /users/profile:
     *   get:
     *     summary: Get the profile of the currently authenticated user
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Current user's profile
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/User' }
     *       401:
     *         description: Unauthorized or user data not available
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/profile',
        userController.getProfile.bind(userController)
    );

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: List all users (Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: A list of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/User' }
     *       403:
     *         description: Forbidden - Insufficient permissions
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/',
        // Authentication and user context are already applied
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        userController.listUsers.bind(userController)
    );

    /**
     * @swagger
     * /users/{userId}:
     *   get:
     *     summary: Get a specific user by their ID (Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: userId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the user to retrieve.
     *     responses:
     *       200:
     *         description: User data
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/User' }
     *       403:
     *         description: Forbidden - Insufficient permissions
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: User not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/:userId',
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        userController.getUserById.bind(userController)
    );
    
    // Note: User creation is typically handled by /auth/register
    // User update/delete routes can be added here if needed, with appropriate protections.

    return router;
}
