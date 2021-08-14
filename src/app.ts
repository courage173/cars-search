import express, { Request, Response, NextFunction } from 'express';
import Logger from './utils/Logger';
import bodyParser from 'body-parser';
import cors from 'cors';
import { environment } from './config';
import searchRoute from './api/search';
import { NotFoundError, ApiError, InternalError } from './utils/ErrorHandler';

process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

//search api
app.use(['/api/v1', '/api/'], searchRoute);

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get(['/', '/api'], function (req: Request, res: Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      status: 200,
      message: 'Service Status - OK',
    }),
  );
});

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development') {
      Logger.error(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
});

export default app;
