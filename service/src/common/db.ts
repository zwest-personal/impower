/**
 * DB Connection
 */

import {Sequelize} from 'sequelize-typescript';
import Config from '@src/common/config';

const DB = new Sequelize({
    database: Config.MysqlDb,
    username: Config.MysqlUser,
    password: Config.MysqlPass,
    host: Config.MysqlHost,
    port: Config.MysqlPort,
    dialect: 'mysql',
    models: [__dirname + '/../models'],
});

// Additional stuff we could add here - session check, reconnect behaviors, etc

export default DB;

