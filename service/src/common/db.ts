/**
 * DB Connection
 */

import {Sequelize} from 'sequelize-typescript';
import Config from '@src/common/config';
import User from "@src/models/user";
import Campaigns from "@src/models/campaign";
import Note from "@src/models/note";

const DB = new Sequelize({
    database: Config.MysqlDb,
    username: Config.MysqlUser,
    password: Config.MysqlPass,
    host: Config.MysqlHost,
    port: Config.MysqlPort,
    dialect: 'mysql'
});

// TODO Use the auto-initialization option (if it's worth picking at)
DB.addModels([User, Note, Campaigns]);

(async () => {
    await DB.sync({force: true});
})();

export default DB;

