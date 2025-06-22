import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Trigger signin flow
 *
 * In this app, just checks U/P and creates session.
 * In a 'real' app, would probably trigger a flow through an IDP
 *
 * @param _
 * @param res
 */
function login(_: IReq, res: IRes) {
    res.status(HttpStatusCodes.NOT_IMPLEMENTED).json();
}

export default login;
