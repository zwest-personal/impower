import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Remove deletes (softly) a singular note
 *
 * 'remove' rather than 'delete' due to reserved words
 *
 * @param _
 * @param res
 */
function remove(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default remove;
