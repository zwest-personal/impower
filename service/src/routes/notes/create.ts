import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Create makes and saves a new note
 * @param _
 * @param res
 */
function create(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default create;
