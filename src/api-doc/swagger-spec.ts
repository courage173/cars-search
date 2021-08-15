import swaggerJSDoc from 'swagger-jsdoc';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.21', // Version of swagger
  info: {
    title: 'Orbiseed Node API Task', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'Node REST APIs',
  },
  components: {},
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['src/api-doc/**/*.yml'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
