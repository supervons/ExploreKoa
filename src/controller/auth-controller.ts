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
}

export default new AuthController();
