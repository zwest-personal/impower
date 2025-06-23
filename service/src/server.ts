// This is probably the most overly messy file, as tends to happen in the root app, but one that's not too hard to tidy uip
import express, {Request, Response, NextFunction} from 'express';

import 'express-async-errors';

import ApiRouter from '@src/routes';

import {RouteError} from '@src/common/route-errors';
import {HTTPResponse} from '@src/common/jsend/http';
import HttpStatusCodes from 'http-status-codes';
import RouteList from "@src/common/routes";
import {RedisStore} from "connect-redis"
import session from "express-session"
import {createClient} from "redis"
import Config from "@src/common/config";

import "@src/common/db"; // Self initialize to prep sequelize + models

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Sessions (to be saved in Redis)
let redisClient = createClient({url: Config.RedisCn})
redisClient.connect().catch(console.error)

// Initialize session store via Redis
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "impower:",
})

// Add in the session store middleware
app.use(
    session({
      store: redisStore,
      resave: false,
      saveUninitialized: false,
      secret: "impowerEMPOWER",
    }),
)

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
