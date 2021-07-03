import CommonService from '../service/common-service';
import * as Koa from 'koa';
/**
 * Common controller.
 * This api used for get common info, such as profile.
 */
class CommonController {
  private service: CommonService = new CommonService();

  hello = async (ctx: Koa.Context) => {
    ctx.body = await this.service.hello();
  };

  upload = async (ctx: Koa.Context) => {
    await this.service.upload(ctx);
  };

  getProfile = async (ctx: Koa.Context) => {
    await this.service.getProfile(ctx);
  };

  profile = async (ctx: Koa.Context) => {
    await this.service.saveAndFlushProfile(ctx);
  };

  updateProfile = async (ctx: Koa.Context) => {
    await this.service.saveAndFlushProfile(ctx);
  };

  deleteProfile = async (ctx: Koa.Context) => {
    await this.service.deleteProfile(ctx);
  };
}

export default new CommonController();
