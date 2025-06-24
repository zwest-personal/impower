import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Get fetches a singular user from the DB
 * @param req
 * @param res
 */
function status(req: IReq, res: IRes) {
  res.status(HttpStatusCodes.OK).json(HTTPResponse.success(req.session.user));
}

export default status;
