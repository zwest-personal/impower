import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import {
    Sequelize,
} from "sequelize-typescript";
import Note from "@src/models/note";
import Campaign from "@src/models/campaign";

/**
 * List fetches all notes from DB, using some manner of filter
 *
 * @TODO pagination
 *
 * @param req
 * @param res
 */
async function list(req: IReq, res: IRes) {
    try {
        let query = {}
        if (!!req.query.text) {
            console.log(req.query.text);
            query = {
                include: Campaign,
                where: Sequelize.literal('MATCH (email, notes) AGAINST (:search)'),
                replacements:
                    {
                        search: req.query.text
                    }
            }
        } else {
            query = {
                include: Campaign,
            }
        }

        let n = await Note.findAll(query)

        res.status(HttpStatusCodes.OK).json(HTTPResponse.success({notes: n || []}))
    } catch (e) {
        console.log(e)
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(HTTPResponse.error("Error fetching note list"))
    }
}

export default list;
