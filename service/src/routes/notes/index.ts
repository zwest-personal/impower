// Notes routes are those that handle creation/editing/deletion/viewing of notes created by the canvassers

import {Router} from 'express';
import RouteList from '@src/common/routes';

const notesRouter = Router();

// Handlers
import list from './list'
import get from './get'
import remove from './remove'
import update from './update'
import create from './create'

notesRouter[RouteList.Routes.Notes.Actions.List.method](RouteList.Routes.Notes.Actions.List.path, list);
notesRouter[RouteList.Routes.Notes.Actions.Get.method](RouteList.Routes.Notes.Actions.Get.path, get);
notesRouter[RouteList.Routes.Notes.Actions.Delete.method](RouteList.Routes.Notes.Actions.Delete.path, remove);
notesRouter[RouteList.Routes.Notes.Actions.Update.method](RouteList.Routes.Notes.Actions.Update.path, update);
notesRouter[RouteList.Routes.Notes.Actions.Create.method](RouteList.Routes.Notes.Actions.Create.path, create);

export default notesRouter;
