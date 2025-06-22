// 'Debug' routes are mostly misc stuff.  In a full fledged system these would be routes that would not be stood up
// in any env beyond maybe a QA one.

import {Router} from 'express';
import RouteList from '@src/common/routes';

import ping from './ping'

const debugRouter = Router();

// Ehhhhhhh... second guessing this idea.  Just too verbose, too little gain.  However pulling this into a method for the RouteList/Set might be nice.
debugRouter[RouteList.Routes.Debug.Actions.Ping.method](RouteList.Routes.Debug.Actions.Ping.path, ping);

export default debugRouter;
