import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../api-doc/swagger-spec';

const router = express.Router();

const swaggerUiOptions = {
  customSiteTitle: 'Orbiseed - Node API Task | API Documentation',
  customCss: '.swagger-ui .topbar { display: none }',
};

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec, swaggerUiOptions));

export default router;
