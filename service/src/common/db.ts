/**
 * DB Connection
 */

import {Sequelize} from 'sequelize-typescript';
import Config from '@src/common/config';
import User from '@src/models/user';
import Campaigns from '@src/models/campaign';
import Note from '@src/models/note';
import Campaign from "@src/models/campaign";

const DB = new Sequelize({
  database: Config.MysqlDb,
  username: Config.MysqlUser,
  password: Config.MysqlPass,
  host: Config.MysqlHost,
  port: Config.MysqlPort,
  dialect: 'mysql',
});

// TODO Use the auto-initialization option (if it's worth picking at)
// Note - order is specific, keys won't be generated properly if Note is done before the others
DB.addModels([Campaigns, User, Note]);

(async () => {
  await DB.sync({force: true});
  Campaigns.create({name: 'Default Campaign'})
})();

// Prepopulate for dev


export default DB;

