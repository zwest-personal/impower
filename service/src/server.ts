import express, {Request, Response, NextFunction} from 'express';

import 'express-async-errors';

import ApiRouter from '@src/routes';

import {RouteError} from '@src/common/route-errors';
import {HTTPResponse} from '@src/common/jsend/http';
import HttpStatusCodes from 'http-status-codes';
import RouteList from "@src/common/routes";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).json(HTTPResponse.error(err.message));
  }
  return next(err);
});

// Add HTTP Routes
app.use(RouteList.Base, ApiRouter);

export default app;
