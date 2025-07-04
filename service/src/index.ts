require('module-alias/register')

import logger from 'jet-logger';

import Config from '@src/common/config';
import server from './server';


/******************************************************************************
                                  Run
******************************************************************************/

const SERVER_START_MSG = ('Express server started on host:port ' +
  Config.ServerHost.toString() + ':' + Config.ServerPort.toString());

server.listen(Config.ServerPort, Config.ServerHost, () => logger.info(SERVER_START_MSG));
