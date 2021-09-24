import AuthService from '../service/auth-service';
import * as Koa from 'koa';
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
}

export default new AuthController();
