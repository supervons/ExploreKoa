import CommonService from '../service/common-service';

class HomeController {
  private service: CommonService = new CommonService();

  hello = async ctx => {
    ctx.body = await this.service.hello();
  };

  upload = async ctx => {
    await this.service.upload(ctx);
  };

  getProfile = async ctx => {
    await this.service.getProfile(ctx);
  };

  profile = async ctx => {
    await this.service.profile(ctx);
  };

  updateProfile = async ctx => {
    await this.service.upload(ctx);
  };
}

export default new HomeController();
