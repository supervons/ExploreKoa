import AuthService from '../service/auth-service';

class AuthController {
  private service: AuthService = new AuthService();

  auth = async ctx => {
    ctx.body = await this.service.auth();
  };
}

export default new AuthController();
