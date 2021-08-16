import express, { Request, Response } from 'express';
import { SuccessResponse } from '../utils/Response';
import SearchService from '../services/searchService';
import buildQuery from '../utils/BuildQuery';
import { BadRequestError } from '../utils/ErrorHandler';
import AsyncHandler from '../utils/AsyncHandler';

const router = express.Router();

router.get(
  '/',
  AsyncHandler(async (req: Request, res: Response) => {
    //build and sanitize the search query so as to remove invalid criterias if passed in
    //and also convert minYear,maxYear,minPrice and maxPrice to numbers
    const query = buildQuery(req.query);
    //check if the query criteria is empty
    if (Object.keys(query).length < 1) {
      throw new BadRequestError('no search criteria added');
    }
    try {
      //call the search service
      const cars = await SearchService.search(query);
      new SuccessResponse('success', cars).send(res);
    } catch (error) {
      throw new BadRequestError(error);
    }
  }),
);

export default router;
