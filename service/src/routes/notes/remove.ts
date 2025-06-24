import HttpStatusCodes from 'http-status-codes';
import { HTTPResponse } from '@src/common/jsend/http';
import {IReq, IRes} from '../common';
import Note from '@src/models/note';

/**
 * Remove deletes (softly) a singular note
 *
 * 'remove' rather than 'delete' due to reserved words
 *
 * TODO Add auditling, logging, soft-delete, authorization, etc
 *
 * @param req
 * @param res
 */
async function remove(req: IReq, res: IRes) {
  try {
    const n = await Note.destroy({where: {noteId: req.params.id}});

    if (n === 0) {
      throw new Error('Note not found');
    }

    res.status(HttpStatusCodes.NO_CONTENT).json()
  } catch (e) {
    console.log(e);
    res.status(HttpStatusCodes.NOT_FOUND).json(HTTPResponse.error('Note not found'));
  }
}

export default remove;
