import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * List fetches all notes from DB, using some manner of filter
 *
 * @TODO pagination
 * @TODO Filters (beyond fulltext)
 *
 * @param _
 * @param res
 */
function list(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default list;
