import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import Note from "@src/models/note";

/**
 * Get fetches a singular note from the DB
 * @param _
 * @param res
 */
async function get(req: IReq, res: IRes) {
    try {
        let n = await Note.findOne({where: {noteId: req.params.id}})

        if (!n) {
            throw new Error('Note not found')
        }

        res.status(HttpStatusCodes.OK).json(HTTPResponse.success(n))
    } catch (e) {
        console.log(e)
        // You may or may not want the 'NOT FOUND' response for any error, if you want to conceal potential causes
        // Elsewise just having 404 and 503 (for when something is broken-broken) would be good.
        res.status(HttpStatusCodes.NOT_FOUND).json(HTTPResponse.error("Note not found"))
    }
}

export default get;
