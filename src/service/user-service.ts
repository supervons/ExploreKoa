/**
 * controller implementation class
 */
import * as moment from 'moment';
import { getManager, Like } from 'typeorm';
import { UserInfo } from '../entity/UserInfo';
export default class UserService {
  /**
   * get user list info.
   * contains paging,Fuzzy search
   * more typeorm usage you can go to https://typeorm.bootcss.com/find-options
   */
  getUsers = async ctx => {
    const params = ctx.request.body;
    const searchWord = params.searchWord;
    const pageSize = params.pageSize;
    const pageStart = pageSize * (params.pageNumber - 1);
    const userRepository = getManager().getRepository(UserInfo);
    const [result, resultCount] = await userRepository.findAndCount({
      skip: pageStart,
      take: pageStart + pageSize,
      where: { userName: Like(`%${searchWord}%`) }
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
  getUser = async ctx => {
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
  createUser = async ctx => {
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
  deleteUser = async ctx => {
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
  updateUser = async ctx => {
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
}
