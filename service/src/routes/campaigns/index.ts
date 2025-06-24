// Campaign routes are those that handle creation/editing/deletion/viewing of campaigns that the canvassers
// are creating notes in.

import {Router} from 'express';
import RouteList from '@src/common/routes';

const campaignRouter = Router();

// Handlers
import list from './list';
import get from './get';
import create from './create';

campaignRouter[RouteList.Routes.Campaigns.Actions.List.method](RouteList.Routes.Campaigns.Actions.List.path, list);
campaignRouter[RouteList.Routes.Campaigns.Actions.Get.method](RouteList.Routes.Campaigns.Actions.Get.path, get);
campaignRouter[RouteList.Routes.Campaigns.Actions.Create.method](RouteList.Routes.Campaigns.Actions.Create.path, create);

export default campaignRouter;
