/**
 * UserService, operation UserInfo.
 */
import * as Koa from 'koa';
import * as moment from 'moment';
import { getManager, Like } from 'typeorm';
import { UserInfo } from '../entity/UserInfo';
export default class UserService {
  /**
   * Get user list info.
   * Contains paging,fuzzy search
   * More typeorm usage you can go to https://typeorm.bootcss.com/find-options
   */
  getUsers = async (ctx: Koa.Context) => {
    const { pageNumber, pageSize, searchWord } = ctx.params;
    const pageStart = pageSize * (pageNumber - 1);
    const userRepository = getManager().getRepository(UserInfo);
    const [result, resultCount] = await userRepository.findAndCount({
      skip: pageStart,
      take: pageStart + pageSize,
      where: searchWord ? { userName: Like(`%${searchWord}%`) } : null
    });
    if (result) {
      ctx.success({ count: resultCount, userList: result }, 'success!');
    } else {
      ctx.fail('query user failed！', -1);
    }
  };
  /**
   * get user info
   */
  getUser = async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    const userRepository = getManager().getRepository(UserInfo);
    const result = await userRepository.findOne(id);
    if (result) {
      ctx.success({ userInfo: result }, 'success!');
    } else {
      ctx.fail('query user failed！', -1);
    }
  };
  /**
   * Create new user
   */
  createUser = async (ctx: Koa.Context) => {
    const userInfo = ctx.request.body;
    const userRepository = getManager().getRepository(UserInfo);
    const result = await userRepository.insert({
      ...userInfo,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    });
    if (result) {
      ctx.success({}, 'create success!');
    } else {
      ctx.fail('create user failed！', -1);
    }
  };
  /**
   * Delete user by id
   */
  deleteUser = async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    const userRepository = getManager().getRepository(UserInfo);
    const result = await userRepository.delete(id);
    if (result) {
      ctx.success({}, 'delete success!');
    } else {
      ctx.fail('delete user failed！', -1);
    }
  };
  /**
   * update user by id
   */
  updateUser = async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    const userInfo = ctx.request.body;
    const userRepository = getManager().getRepository(UserInfo);
    const result = await userRepository.update(id, {
      ...userInfo,
      updateTime: moment().format('YYYY-MM-DD HH:mm')
    });
    if (result) {
      ctx.success({}, 'update success!');
    } else {
      ctx.fail('update user failed！', -1);
    }
  };
  /**
   * Update user password.
   * First check old password , if correct will be change password.
   */
  updatePassword = async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    const { oldPassword, newPassword } = ctx.request.body;
    const userRepository = getManager().getRepository(UserInfo);
    const [result, resultCount] = await userRepository.find({
      id: id,
      password: oldPassword
    });
    if (result) {
      const newUserInfo = {
        ...result,
        password: newPassword,
        updateTime: moment().format('YYYY-MM-DD HH:mm')
      };
      const updateResult = await userRepository.save(newUserInfo);
      if (updateResult) {
        ctx.success({}, 'update password success!');
      } else {
        ctx.fail('update password failed！', -1);
      }
    } else {
      ctx.fail('old password check failed！', -1);
    }
  };
}
