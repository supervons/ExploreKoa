import * as JWT from 'jsonwebtoken';
import * as Koa from 'koa';
import { getManager } from 'typeorm';
import { UserInfo } from '../entity/UserInfo';
import { JWT_SECRET } from '../constants';
import { sendRegisterMail } from '../utils/email';
import { getRandomString } from 'src/utils/common';
export default class AuthService {
  /**
   * Search the database based on the user name and password
   * Return the user information and JWT Token token if matched
   */
  auth = async (ctx: Koa.Context) => {
    const userInfo = ctx.request.body;
    const uId = userInfo.uId;
    const password = userInfo.password;
    const userRepository = getManager().getRepository(UserInfo);
    const users = await userRepository.findOne({
      uId: uId,
      password: password
    });
    if (users) {
      const result = {
        userInfo: users,
        token: JWT.sign({ id: uId }, JWT_SECRET, { expiresIn: 24 * 60 * 60 })
      };
      ctx.success(result, 'success');
    } else {
      ctx.fail('Incorrect user name or password！', -1);
    }
  };

  /**
   * When user register or other need to authorization operation,must verify the email code.
   * Other operation : change password, find password.
   */
  getEmailCode = async (ctx: Koa.Context) => {
    const emailInfo = ctx.request.body;
    const { uId, email } = emailInfo;
    const code = getRandomString(6);
    const result = await sendRegisterMail(email, code);
    if (result) {
      ctx.success(null, 'Send code to email success!');
    } else {
      ctx.fail('Send code faild！', -1);
    }
  };
}
