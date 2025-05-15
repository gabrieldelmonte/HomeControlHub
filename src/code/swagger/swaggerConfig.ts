import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Home Control Hub API',
    version: '1.0.0',
    description: 'API documentation for the Home Control Hub application. Control and manage your smart home devices.',
    contact: {
      name: 'API Support',
      email: 'support@example.com', // Replace with actual contact
    },
    license: {
      name: 'MIT', // Or your chosen license
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: '/api/v1', // Base path for all API routes
      description: 'Development server',
    },
    // You can add more servers here (e.g., production)
    // {
    //   url: 'https://api.yourdomain.com/api/v1',
    //   description: 'Production server',
    // },
  ],
  components: {
    securitySchemes: {
      bearerAuth: { // Name of the security scheme
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT', // Optional, for documentation purposes
        description: 'Enter JWT Bearer token **_only_**',
      },
    },
    schemas: { // Reusable schemas
      ErrorResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message detailing what went wrong.',
          },
          stack: {
            type: 'string',
            description: '(Development Only) Stack trace for the error.',
            nullable: true,
          }
        },
        required: ['message'],
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          username: { type: 'string' },
          role: { type: 'string', enum: ['ADMIN', 'STANDARD_USER', 'GUEST'] },
        },
      },
      Device: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          type: { type: 'string' },
          status: { type: 'boolean' },
          aesKey: { type: 'string', description: 'AES encryption key for the device (sensitive, usually not returned)' },
          lastKnownState: { type: 'object', additionalProperties: true },
          ownerId: { type: 'string', format: 'uuid', nullable: true },
          firmwareVersion: { type: 'string', nullable: true },
        },
      },
      // Add more schemas for request/response bodies as needed
    },
  },
  // security: [ // Global security requirement (can be overridden at operation level)
  //   {
  //     bearerAuth: [], // Requires bearerAuth for all routes by default
  //   },
  // ],
};

const swaggerOptions: OAS3Options = {
  definition: swaggerDefinition,
  apis: [ // Paths to files containing OpenAPI definitions (JSDoc comments)
    './src/code/routes/*.ts',
    './src/code/controllers.ts', // If you put detailed JSDoc in controllers
    './src/code/entities.ts',    // For schema definitions if not manually defined above
  ],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions); 