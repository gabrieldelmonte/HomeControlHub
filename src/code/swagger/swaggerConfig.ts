import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Home Control Hub API',
    version: '1.0.0',
    description: 'API documentation for the Home Control Hub application. Control and manage your smart home devices.',
    contact: {
      name: 'API Support',
      email: 'homecontrolhub@email.com',
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  /*
  tags: [
    {
      name: 'Authentication',
      description: 'User authentication and authorization endpoints'
    },
    {
      name: 'Users',
      description: 'User management endpoints'
    },
    {
      name: 'Devices',
      description: 'Device management and control endpoints'
    },
    {
      name: 'Automation',
      description: 'MQTT automation rules and command sending endpoints'
    },
    {
      name: 'Notifications',
      description: 'Notification management endpoints'
    }
  ],
  */
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
          email: { type: 'string', format: 'email' },
          role: { type: 'string', enum: ['ADMIN', 'STANDARD_USER', 'GUEST'] },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      Device: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          type: { type: 'string' },
          status: { type: 'boolean' },
          description: { type: 'string', nullable: true },
          location: { type: 'string' },
          mqttTopic: { type: 'string' },
          aesKey: { type: 'string', description: 'AES encryption key for the device (sensitive, usually not returned)' },
          userId: { type: 'string', format: 'uuid', description: 'The ID of the user who owns this device' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      AutomationRule: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          triggerCondition: { type: 'string' },
          action: { type: 'object', additionalProperties: true },
          deviceId: { type: 'string', format: 'uuid' },
          active: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      Notification: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          message: { type: 'string' },
          type: { type: 'string', enum: ['WELCOME', 'DEVICE_ADDED', 'CRITICAL', 'SYSTEM', 'ADMIN'] },
          userId: { type: 'string', format: 'uuid' },
          read: { type: 'boolean' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateDeviceRequest: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string' },
          description: { type: 'string', nullable: true },
          location: { type: 'string' },
          mqttTopic: { type: 'string' },
          aesKey: { type: 'string' },
          status: { type: 'boolean', default: false },
        },
        required: ['name', 'type', 'location', 'mqttTopic', 'aesKey'],
      },
      UpdateDeviceRequest: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string' },
          description: { type: 'string', nullable: true },
          location: { type: 'string' },
          mqttTopic: { type: 'string' },
        },
      },
      CreateAutomationRuleRequest: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          triggerCondition: { type: 'string' },
          action: { type: 'string' },
        },
        required: ['name', 'triggerCondition', 'action'],
      },
      MQTTCommandRequest: {
        type: 'object',
        properties: {
          command: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              payload: { type: 'object', additionalProperties: true },
            },
            required: ['name', 'payload'],
          },
        },
        required: ['command'],
      },
      LoginRequest: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
        },
        required: ['username', 'password'],
      },
      RegisterRequest: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
        },
        required: ['username', 'email', 'password'],
      },
      AuthResponse: {
        type: 'object',
        properties: {
          token: { type: 'string' },
          user: { $ref: '#/components/schemas/User' },
        },
      },
      MQTTCommandResponse: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          topic: { type: 'string' },
          command: { type: 'object', additionalProperties: true },
          timestamp: { type: 'string', format: 'date-time' },
        },
      },
      Command: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          payload: { type: 'object', additionalProperties: true },
          deviceId: { type: 'string', format: 'uuid' },
          executedAt: { type: 'string', format: 'date-time' },
        },
      },
      SystemLog: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          type: { type: 'string', enum: ['INFO', 'WARNING', 'ERROR'] },
          message: { type: 'string' },
          source: { type: 'string', enum: ['DEVICE', 'USER', 'AUTH', 'SYSTEM'] },
          deviceId: { type: 'string', format: 'uuid', nullable: true },
          userId: { type: 'string', format: 'uuid', nullable: true },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateNotificationRequest: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          type: { type: 'string', enum: ['WELCOME', 'DEVICE_ADDED', 'CRITICAL', 'SYSTEM', 'ADMIN'] },
          userId: { type: 'string', format: 'uuid' },
        },
        required: ['message', 'type', 'userId'],
      },
      UpdateNotificationRequest: {
        type: 'object',
        properties: {
          read: { type: 'boolean' },
        },
      },
      CreateUserRequest: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
          role: { type: 'string', enum: ['ADMIN', 'STANDARD_USER', 'GUEST'], default: 'STANDARD_USER' },
        },
        required: ['username', 'email', 'password'],
      },
      UpdateUserRequest: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          email: { type: 'string', format: 'email' },
          role: { type: 'string', enum: ['ADMIN', 'STANDARD_USER', 'GUEST'] },
        },
      },
      // Add more schemas for request/response bodies as needed
    },
  },
  security: [ // Global security requirement (can be overridden at operation level)
    {
      bearerAuth: [], // Requires bearerAuth for all routes by default
    },
  ] 
};

const swaggerOptions: OAS3Options = {
  definition: swaggerDefinition,
  apis: [ // Paths to files containing OpenAPI definitions (JSDoc comments)
    /*
    './dist/code/routes/*.js',    // Local development build path
    './src/code/routes/*.ts',     // TypeScript source path (for development)
    */
    '/app/dist/code/routes/*.js', // Docker container path
  ]
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
console.log("Generated Swagger Spec:", JSON.stringify(swaggerSpec, null, 2)); // DEBUG LINE
