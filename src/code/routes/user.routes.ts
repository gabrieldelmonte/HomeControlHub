import { Router } from 'express';
import { UserController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from '../middlewares';
import { UserRole_ENUM } from '../enums';

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

    // Get current user's profile
    router.get(
        '/profile',
        // Authentication and user context are already applied by router.use above
        userController.getProfile.bind(userController)
    );

    // Get all users (Admin only)
    router.get(
        '/',
        // Authentication and user context are already applied
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        userController.listUsers.bind(userController)
    );

    // Get user by ID (Admin only)
    router.get(
        '/:userId',
        // Authentication and user context are already applied
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        userController.getUserById.bind(userController) // Assuming getUserById is correct, if not, adjust to controller method
    );
    
    // Note: User creation is typically handled by /auth/register
    // User update/delete routes can be added here if needed, with appropriate protections.

    return router;
}
