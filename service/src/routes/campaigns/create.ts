import HttpStatusCodes from 'http-status-codes';
import {HTTPResponse} from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import User from '@src/models/user';
import Campaign from '@src/models/campaign';

/**
 * Create makes and saves a new campaign
 * @param _
 * @param res
 */
async function create(req: IReq, res: IRes) {
  const c = Campaign.build(req.body);

  try {
    const result = await c.save();
    res.status(HttpStatusCodes.CREATED).json(HTTPResponse.success(result));
  } catch (e) {
    // TODO Switch to appropriate code based on error type (eg 422 if input is bad)
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(HTTPResponse.error(e.message));
  }
}


export default create;
