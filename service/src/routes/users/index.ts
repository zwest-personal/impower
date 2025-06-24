// Users routes handle basic signin/signout
// Get route is probably pointless but trivial to add

import {Router} from 'express';
import RouteList from '@src/common/routes';

const usersRouter = Router();

// Handlers
import status from './status';
import login from './login';
import logout from './logout';
import create from './create';

usersRouter[RouteList.Routes.Users.Actions.Status.method](RouteList.Routes.Users.Actions.Status.path, status);
usersRouter[RouteList.Routes.Users.Actions.Login.method](RouteList.Routes.Users.Actions.Login.path, login);
usersRouter[RouteList.Routes.Users.Actions.Logout.method](RouteList.Routes.Users.Actions.Logout.path, logout);
usersRouter[RouteList.Routes.Users.Actions.Create.method](RouteList.Routes.Users.Actions.Create.path, create);

export default usersRouter;
