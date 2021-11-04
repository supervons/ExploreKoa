import * as JWT from 'jsonwebtoken';
import * as Koa from 'koa';
import * as moment from 'moment';
import { getManager } from 'typeorm';
import { UserInfo } from '../entity/UserInfo';
import { VerifyInfo } from '../entity/VerifyInfo';
import { JWT_SECRET } from '../constants';
import { sendRegisterMail } from '../utils/email';
import { getRandomString } from '../utils/common';
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
    const expirationTime = moment(moment().valueOf() + 1000 * 300).valueOf(); // expiration time 5 minutes.
    const verifyRepository = getManager().getRepository(VerifyInfo);
    const result = await sendRegisterMail(email, code);
    let sended = 0;
    if (result.accepted.length !== 0) {
      sended = 1;
    }
    // Insert emailcode to database.
    const verifyResult = await verifyRepository.insert({
      uId,
      type: 'register',
      code,
      email,
      expirationTime,
      createTime: moment().format('YYYY-MM-DD HH:mm'),
      sended
    });
    if (verifyResult) {
      ctx.success(null, 'Send code to email success!');
    } else {
      ctx.fail('Send code faild！', -1);
    }
  };

  /**
   * User register.
   * Verify that the user name matches the verification code and that the verification code has expired.
   */
  createUser = async (ctx: Koa.Context) => {
    const userInfo = ctx.request.body;
    const userRepository = getManager().getRepository(UserInfo);
    const verifyRepository = getManager().getRepository(VerifyInfo);
    const verifyResult = await verifyRepository.findOne({
      uId: userInfo.uId,
      code: userInfo.code,
      email: userInfo.userEmail
    });
    // Check usable and sended status.
    if (verifyResult?.usable === 0 && verifyResult.sended === 1) {
      const currentTime = moment(moment().valueOf()).valueOf();
      if (currentTime < verifyResult.expirationTime) {
        const result = await userRepository.insert({
          ...userInfo,
          userType: '1',
          createTime: moment().format('YYYY-MM-DD HH:mm')
        });
        // Create user success.
        if (result) {
          verifyRepository.save({
            id: verifyResult.id,
            usable: 1 // Set usable to 1.
          });
          ctx.success({ ...result }, 'Register success!');
        } else {
          ctx.fail('Register failed!', -1);
        }
      } else {
        ctx.fail('Incorrect code!', -1);
      }
    } else {
      ctx.fail('Incorrect code!', -1);
    }
  };

  /**
   * Search the database based on the user name.
   */
  getUid = async (ctx: Koa.Context) => {
    const uId = ctx.params.userId;
    const userRepository = getManager().getRepository(UserInfo);
    const users = await userRepository.findOne({
      uId: uId
    });
    if (!users) {
      ctx.success('User name can use!', 'success');
    } else {
      ctx.fail('User name exist！', -1);
    }
  };
}
