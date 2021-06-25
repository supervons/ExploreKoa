import CommonService from '../service/common-service';

class HomeController {
  private service: CommonService = new CommonService();

  hello = async ctx => {
    ctx.body = await this.service.hello();
  };

  upload = async ctx => {
    ctx.body = await this.service.upload(ctx);
  };
}

export default new HomeController();
