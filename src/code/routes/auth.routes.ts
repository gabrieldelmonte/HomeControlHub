import { Router } from 'express';
import { AuthController } from '../controllers';

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration and login
 */
export function createAuthRouter(authController: AuthController): Router {
    const router = Router();

    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: Register a new user
     *     tags: [Authentication]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - username
     *               - password
     *             properties:
     *               username: { type: string, example: 'newuser' }
     *               password: { type: string, format: 'password', example: 'strongPassword123' }
     *               role: { type: string, enum: ['STANDARD_USER', 'GUEST'], example: 'STANDARD_USER', description: 'Defaults to STANDARD_USER. ADMIN role can only be set by an existing ADMIN (implicitly).' }
     *     responses:
     *       201:
     *         description: User registered successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/User' }
     *       400:
     *         description: Missing username or password
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       409:
     *         description: Username already exists
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       500:
     *         description: Failed to register user
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.post('/register', authController.register.bind(authController));

    /**
     * @swagger
     * /auth/login:
     *   post:
     *     summary: Log in an existing user
     *     tags: [Authentication]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - username
     *               - password
     *             properties:
     *               username: { type: string, example: 'testuser' }
     *               password: { type: string, format: 'password', example: 'password123' }
     *     responses:
     *       200:
     *         description: Login successful, returns JWT token and user info
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token: { type: string, example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }
     *                 user: { $ref: '#/components/schemas/User' }
     *       400:
     *         description: Missing username or password
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       401:
     *         description: Invalid credentials
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       500:
     *         description: Login error
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.post('/login', authController.login.bind(authController));

    return router;
}
