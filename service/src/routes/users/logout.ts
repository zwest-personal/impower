import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';

/**
 * Sign out, destroying session
 *
 * @param _
 * @param res
 */
function logout(req: IReq, res: IRes) {
    req.session.destroy(() => {
        res.status(HttpStatusCodes.OK).json(HTTPResponse.success({}))
    })
}

export default logout;
