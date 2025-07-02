import jetEnv, {str, num} from 'jet-env';
import {isEnumVal} from 'jet-validators';
import {NodeEnvs} from './constants';

const Config = jetEnv({
  ServiceName: str,
  Env: isEnumVal(NodeEnvs),
  ServerHost: str,
  ServerPort: num,
  ApiPath: str,

  MysqlDb: str,
  MysqlUser: str,
  MysqlPass: str,
  MysqlHost: str,
  MysqlPort: num,

  RedisCn: str,
});

export default Config;

