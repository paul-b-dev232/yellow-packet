// swagger.js - Configuration file for swagger-jsdoc
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'My API',
			version: '1.0.0',
			description: 'API Documentation using swagger-jsdoc',
		},
		servers: [
			{
				url: 'http://localhost:5000',
				description: 'Development server',
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
			schemas: {
				User: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							example: '12345',
						},
						email: {
							type: 'string',
							format: 'email',
							example: 'user@example.com',
						},
						name: {
							type: 'string',
							example: 'John Doe',
						},
					},
				},
				LoginRequest: {
					type: 'object',
					required: ['email', 'password'],
					properties: {
						email: {
							type: 'string',
							format: 'email',
							example: 'user@example.com',
						},
						password: {
							type: 'string',
							example: 'password123',
						},
					},
				},
				LoginResponse: {
					type: 'object',
					properties: {
						success: {
							type: 'boolean',
							example: true,
						},
						message: {
							type: 'string',
							example: 'Login successful',
						},
						user: {
							$ref: '#/components/schemas/User',
						},
						token: {
							type: 'string',
							example: 'jwt-token-here',
						},
					},
				},
			},
		},
	},
	apis: ['./routes/*.js', './index.js'], // paths to files containing OpenAPI definitions
};

const specs = swaggerJSDoc(options);

export { specs, swaggerUi };
