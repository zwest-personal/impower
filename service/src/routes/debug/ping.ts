import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Ping simple returns back a 200 'Okay'
 *
 * I mean it's ping/pong, nothing more to it than to have a route that I 100% know should return
 * Weirdly useful in Prod envs...
 *
 * @param _
 * @param res
 */
function ping(_: IReq, res: IRes) {
  res.status(HttpStatusCodes.OK).json(HTTPResponse.success({ping: 'pong'}));
}

export default ping;
