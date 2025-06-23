import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import {Sequelize} from "sequelize-typescript";
import Note from "@src/models/note";

/**
 * List fetches all campaigns from DB, with no filtering at this time
 *
 * @param _
 * @param res
 */
async function list(_: IReq, res: IRes) {
    try {
        let n = await Note.findAll()

        res.status(HttpStatusCodes.OK).json(HTTPResponse.success({campaigns: n || []}))
    } catch (e) {
        console.log(e)
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(HTTPResponse.error("Error fetching campaign list"))
    }
}

export default list;
