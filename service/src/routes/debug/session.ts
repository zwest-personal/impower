import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Dumps current session out
 *
 * @param _
 * @param res
 */
function ping(req: IReq, res: IRes) {
  res.status(HttpStatusCodes.OK).json(HTTPResponse.success(req.session));
}

export default ping;
