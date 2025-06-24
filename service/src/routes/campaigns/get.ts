import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import Campaign from '@src/models/campaign';

/**
 * Get fetches a singular campaign from the DB (by id)
 * @param req
 * @param res
 */
async function get(req: IReq, res: IRes) {
  try {
    const n = await Campaign.findOne({where: {campaignId: req.params.id}});

    if (!n) {
      throw new Error('Campaign not found');
    }

    res.status(HttpStatusCodes.OK).json(HTTPResponse.success(n));
  } catch (e) {
    console.log(e);
    // Same notes for this as in the Notes 'get' route
    res.status(HttpStatusCodes.NOT_FOUND).json(HTTPResponse.error('Campaign not found'));
  }
}

export default get;
