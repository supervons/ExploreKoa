import AuthService from '../service/auth-service';

class AuthController {
  private service: AuthService = new AuthService();

  auth = async ctx => {
    await this.service.auth(ctx);
  };
}

export default new AuthController();
