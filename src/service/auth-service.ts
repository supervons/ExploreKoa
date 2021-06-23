/**
 * controller 实现类
 */
import { getManager } from 'typeorm';
import { UserInfo } from '../entity/UserInfo';
import { default_redis } from '../redis/redisOperate';
let redisTool_db0 = default_redis;
export default class AuthService {
  /**
   * 集成redis，优先从redis里面取数据！
   */
  auth = async () => {
    let users = {};
    let user_info: string = await redisTool_db0.getString('user_info');
    if (user_info) {
      users = JSON.parse(user_info);
    } else {
      const userRepository = getManager().getRepository(UserInfo);
      users = await userRepository.find();
      let res: string = await redisTool_db0.setString('user_info', users);
      console.log(res);
    }
    return users;
  };
}
