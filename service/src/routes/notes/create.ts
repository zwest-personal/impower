import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import Note from "@src/models/note";

/**
 * Create makes and saves a new note
 * @param req
 * @param res
 */
async function create(req: IReq, res: IRes) {
    try {
        req.body.userId = req.session.user?.userId
        const note = await Note.create(req.body);
        if (!note) {
            throw new Error("Unable to create a note");
        }
        res.status(HttpStatusCodes.CREATED).json(HTTPResponse.success(note))
    } catch (err) {
        res.status(HttpStatusCodes.UNPROCESSABLE_ENTITY).json(HTTPResponse.error("Errors in request", err))
    }
}

export default create;
