import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Get fetches a singular note from the DB
 * @param _
 * @param res
 */
function get(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default get;
