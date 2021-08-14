import express, { Request, Response } from 'express';
import { SuccessResponse } from '../utils/Response';
import SearchService from '../services/searchService';
import buildQuery from '../utils/BuildQuery';
import { BadRequestError } from '../utils/ErrorHandler';
import AsyncHandler from '../utils/AsyncHandler';

const router = express.Router();

router.get(
  '/search',
  AsyncHandler(async (req: Request, res: Response) => {
    try {
      const query = buildQuery(req.query);
      const cars = await SearchService.search(query);
      new SuccessResponse('success', cars).send(res);
    } catch (error) {
      throw new BadRequestError(error);
    }
  }),
);

export default router;
