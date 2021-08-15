import express from 'express';
import searchRoute from './search';
import swaggerDocs from './swagger';

const router = express.Router();

//search api
router.use('/search', searchRoute);

//swagger documentation api
router.use('/docs', swaggerDocs);

export default router;
