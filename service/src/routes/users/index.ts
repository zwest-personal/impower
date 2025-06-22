// Users routes handle basic signin/signout
// Get route is probably pointless but trivial to add

import {Router} from 'express';
import RouteList from '@src/common/routes';

const usersRouter = Router();

// Handlers
import get from './get'
import login from './login'
import logout from './logout'

usersRouter[RouteList.Routes.Notes.Actions.Get.method](RouteList.Routes.Notes.Actions.Get.path, get);
usersRouter[RouteList.Routes.Notes.Actions.Login.method](RouteList.Routes.Notes.Actions.Login.path, login);
usersRouter[RouteList.Routes.Notes.Actions.Logout.method](RouteList.Routes.Notes.Actions.Logout.path, logout);

export default usersRouter;
