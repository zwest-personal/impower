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
 * Always returns a generic error rather than specifying username vs pw
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
        const loginResult = await u.validatePassword(u.password, req.body.password as string)
        if (!loginResult) {
            res.status(HttpStatusCodes.UNAUTHORIZED).json(HTTPResponse.error("Invalid Email or Password"))
        } else {
            // Establish session
            req.session.user = {
                userId: u.userId,
                email: u.email,
                fullName: u.fullName,
            }

            req.session.save(() => {
                res.status(HttpStatusCodes.OK).json(HTTPResponse.success(req.session.user));
            })
        }
    } catch (e) {
        console.log(e)
        res.status(HttpStatusCodes.UNAUTHORIZED).json(HTTPResponse.error("Invalid Email or Password"))
    }

}

export default login;
