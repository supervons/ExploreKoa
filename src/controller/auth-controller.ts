import * as Koa from 'koa';
import AuthService from '../service/auth-service';
/**
 * Auth controller.
 * This api used for get JWT auth token.
 */
class AuthController {
  private service: AuthService = new AuthService();

  auth = async (ctx: Koa.Context) => {
    await this.service.auth(ctx);
  };

  getEmailCode = async (ctx: Koa.Context) => {
    await this.service.getEmailCode(ctx);
  };

  createUser = async (ctx: Koa.Context) => {
    await this.service.createUser(ctx);
  };

  getUniqueTicket = async (ctx: Koa.Context) => {
    await this.service.getUniqueTicket(ctx);
  };
}

export default new AuthController();
