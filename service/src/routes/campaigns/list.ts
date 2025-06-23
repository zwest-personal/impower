import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import {Sequelize} from "sequelize-typescript";
import Note from "@src/models/note";
import Campaign from "@src/models/campaign";

/**
 * List fetches all campaigns from DB, with no filtering at this time
 *
 * @param _
 * @param res
 */
async function list(_: IReq, res: IRes) {
    try {
        let c = await Campaign.findAll()

        res.status(HttpStatusCodes.OK).json(HTTPResponse.success({campaigns: c || []}))
    } catch (e) {
        console.log(e)
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(HTTPResponse.error("Error fetching campaign list"))
    }
}

export default list;
