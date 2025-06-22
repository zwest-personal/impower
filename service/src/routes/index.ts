import { Router } from 'express';

import DebugRouter from '@src/routes/debug';
// import NotesRouter from '@src/routes/notes';
// import UsersRouter from '@src/routes/users';
// import CampaignRouter from '@src/routes/campaigns';


import RouteList from "@src/common/routes";

/**
 * Set up REST routes
 *
 * In a larger service I would break out the various into individual files/folders.
 * So instead of putting a route here you'd define it
 */

const routes = Router();
routes.use(RouteList.Routes.Debug.Base, DebugRouter);
// routes.use(RouteList.Routes.Users.Base, UserRouter);
// routes.use(RouteList.Routes.Notes.Base, NotesRouter);
// routes.use(RouteList.Routes.Campaigns.Base, CampaignsRouter);

export default routes;
