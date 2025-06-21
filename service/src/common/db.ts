/**
 * DB Connection
 */

import {Sequelize} from 'sequelize';
import Config from '@src/common/config';

const DB = new Sequelize(
  Config.MysqlDb,
  Config.MysqlUser,
  Config.MysqlPass,
  {
    host: Config.MysqlHost,
    port: Config.MysqlPort,
    dialect: 'mysql',
  },
);

// Additional stuff we could add here - session check, reconnect behaviors, etc

export default DB;

