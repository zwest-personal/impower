import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import User from "@src/models/user"

/**
 * Create a new user
 *
 * Basically a sort of self-registration. Since no users really have advanced permission (our AuthZ levels) then this
 * is good enough. Minimalish
 *
 * @param req
 * @param res
 */
async function create(req: IReq, res: IRes) {
    let u = User.build(req.body);

    try {
        let result = await u.save()
        res.status(HttpStatusCodes.CREATED).json(HTTPResponse.success(result));
    } catch (e) {
        // TODO Switch to appropriate code based on error type (eg 422 if input is bad0
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(HTTPResponse.error(e.message))
    }
}

export default create;
