import UserService from '../service/user-service';

class UserController {
  private service: UserService = new UserService();

  getUser = async ctx => {
    await this.service.getUser(ctx);
  };
  createUser = async ctx => {
    await this.service.createUser(ctx);
  };
  deleteUser = async ctx => {
    await this.service.deleteUser(ctx);
  };
  updateUser = async ctx => {
    await this.service.updateUser(ctx);
  };
}

export default new UserController();
