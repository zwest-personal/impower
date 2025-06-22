import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * List fetches all campaigns from DB, with no filtering at this time
 *
 * @param _
 * @param res
 */
function list(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default list;
