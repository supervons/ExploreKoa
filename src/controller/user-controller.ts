import UserService from '../service/user-service';
import * as Koa from 'koa';
/**
 * User controller.
 * This api used for CURD to user info.
 */
class UserController {
  private service: UserService = new UserService();

  getUsers = async (ctx: Koa.Context) => {
    await this.service.getUsers(ctx);
  };
  getUser = async (ctx: Koa.Context) => {
    await this.service.getUser(ctx);
  };
  createUser = async (ctx: Koa.Context) => {
    await this.service.createUser(ctx);
  };
  deleteUser = async (ctx: Koa.Context) => {
    await this.service.deleteUser(ctx);
  };
  updateUser = async (ctx: Koa.Context) => {
    await this.service.updateUser(ctx);
  };
}

export default new UserController();
