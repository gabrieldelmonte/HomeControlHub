import { Router } from 'express';
import multer from 'multer';
import { SupportController } from '../controllers';
import { AuthMiddleware, AttachContextMiddleware, RBACMiddleware } from '../middlewares';
import { UserRole_ENUM } from '../enums';

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images, PDFs, text files, and Office documents are allowed.'));
    }
  }
});

/**
 * @swagger
 * tags:
 *   name: Support
 *   description: Support ticket management
 */
export function createSupportRouter(
    supportController: SupportController,
    authMiddleware: AuthMiddleware,
    attachContextMiddleware: AttachContextMiddleware,
    rbacMiddleware: RBACMiddleware
): Router {
    const router = Router();

    // Authenticate and attach user context for all support routes
    router.use(authMiddleware.authenticateToken.bind(authMiddleware));
    router.use(attachContextMiddleware.attachFullUser.bind(attachContextMiddleware));

    /**
     * @swagger
     * /support/tickets:
     *   post:
     *     summary: Create a new support ticket
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - subject
     *               - message
     *             properties:
     *               subject:
     *                 type: string
     *                 description: Ticket subject
     *               message:
     *                 type: string
     *                 description: Ticket message
     *               priority:
     *                 type: string
     *                 enum: [LOW, MEDIUM, HIGH, URGENT]
     *                 description: Ticket priority
     *               attachments:
     *                 type: array
     *                 items:
     *                   type: string
     *                 description: Array of file paths/names
     *     responses:
     *       201:
     *         description: Support ticket created successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/SupportTicket' }
     *       400:
     *         description: Missing required fields
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.post(
        '/tickets',
        upload.array('fileAttachments', 5), // Allow up to 5 files
        supportController.createTicket.bind(supportController)
    );

    /**
     * @swagger
     * /support/tickets:
     *   get:
     *     summary: Get user's support tickets
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of user's support tickets
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/SupportTicket' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/tickets',
        supportController.getUserTickets.bind(supportController)
    );

    /**
     * @swagger
     * /support/tickets/all:
     *   get:
     *     summary: Get all support tickets (Admin only)
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of all support tickets
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/SupportTicket' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - Admin access required
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/tickets/all',
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        supportController.getAllTickets.bind(supportController)
    );

    /**
     * @swagger
     * /support/tickets/{ticketId}:
     *   get:
     *     summary: Get a specific support ticket
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: ticketId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the ticket to retrieve
     *     responses:
     *       200:
     *         description: Support ticket details
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/SupportTicket' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - You can only view your own tickets
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Support ticket not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/tickets/:ticketId',
        supportController.getTicketById.bind(supportController)
    );

    /**
     * @swagger
     * /support/tickets/{ticketId}:
     *   put:
     *     summary: Update a support ticket
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: ticketId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the ticket to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               subject:
     *                 type: string
     *               message:
     *                 type: string
     *               status:
     *                 type: string
     *                 enum: [OPEN, IN_PROGRESS, RESOLVED, CLOSED]
     *               priority:
     *                 type: string
     *                 enum: [LOW, MEDIUM, HIGH, URGENT]
     *               adminNotes:
     *                 type: string
     *     responses:
     *       200:
     *         description: Support ticket updated successfully
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/SupportTicket' }
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - You can only update your own tickets
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Support ticket not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.put(
        '/tickets/:ticketId',
        supportController.updateTicket.bind(supportController)
    );

    /**
     * @swagger
     * /support/tickets/{ticketId}:
     *   delete:
     *     summary: Delete a support ticket
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: ticketId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the ticket to delete
     *     responses:
     *       204:
     *         description: Support ticket deleted successfully
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - You can only delete your own tickets
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Support ticket not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.delete(
        '/tickets/:ticketId',
        supportController.deleteTicket.bind(supportController)
    );

    /**
     * @swagger
     * /support/attachments/{attachmentId}/download:
     *   get:
     *     summary: Download a support ticket attachment
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: attachmentId
     *         required: true
     *         schema:
     *           type: string
     *           format: uuid
     *         description: The ID of the attachment to download
     *     responses:
     *       200:
     *         description: File download
     *         content:
     *           application/octet-stream:
     *             schema:
     *               type: string
     *               format: binary
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - You can only download attachments from your own tickets
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       404:
     *         description: Attachment not found
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/attachments/:attachmentId/download',
        supportController.downloadAttachment.bind(supportController)
    );

    /**
     * @swagger
     * /support/stats:
     *   get:
     *     summary: Get support ticket statistics (Admin only)
     *     tags: [Support]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Support ticket statistics
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 open:
     *                   type: number
     *                 inProgress:
     *                   type: number
     *                 resolved:
     *                   type: number
     *                 closed:
     *                   type: number
     *       401:
     *         description: Unauthorized
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     *       403:
     *         description: Forbidden - Admin access required
     *         content: { application/json: { schema: { $ref: '#/components/schemas/ErrorResponse' } } }
     */
    router.get(
        '/stats',
        rbacMiddleware.checkRole(UserRole_ENUM.ADMIN).bind(rbacMiddleware),
        supportController.getTicketStats.bind(supportController)
    );

    return router;
}
