import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import User from "@src/models/user"

/**
 * Trigger signin flow
 *
 * In this app, just checks U/P and creates session.
 * In a 'real' app, would probably trigger a flow through an IDP
 *
 * @param req
 * @param res
 */
async function login(req: IReq, res: IRes) {
    try {
        let u = await User.findOne({where: {email: req.body.email}})
        if (!u) {
            throw new Error('User does not exist')
        }
        const loginResult = await u.validatePassword(u.email, u.password)
        res.status(HttpStatusCodes.OK).json(HTTPResponse.success(loginResult));
    } catch (e) {
        console.log(e)
        res.status(HttpStatusCodes.UNAUTHORIZED).json(HTTPResponse.error(e.message))
    }

}

export default login;
