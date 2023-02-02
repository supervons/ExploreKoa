/**
 * CommonService, includes user profile, file upload.
 */
import moment = require('moment');
import * as Koa from 'koa';
import { getManager } from 'typeorm';
import { ProfileInfo } from '../entity/ProfileInfo';
import * as Upload from '../utils/file';
import queryProfile from '../utils/user';
export default class CommonService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };

  /**
   * General file upload
   * @returns file ids
   */
  upload = async (ctx: Koa.Context) => {
    const files = ctx.request.files;
    const origin = ctx.request.origin;
    const fileIds = await Upload.upload(files, origin);
    if (fileIds) {
      ctx.success({ fileInfo: fileIds }, 'upload file success!');
    } else {
      ctx.fail('upload file failed！', -1);
    }
  };

  /**
   * Use leftJoinAndSelect query profile related tables.
   * The getRawMany() returns original data.
   * You should use select() Choose the data you need.
   */
  getProfile = async (ctx: Koa.Context) => {
    const { userId } = ctx.params;
    ctx.success(
      {
        profile: await queryProfile(userId)
      },
      'get profile success!'
    );
  };

  /**
   * Add or update profile.
   * If no files, will update base info.
   * If params have id, denote update profile.Otherwise, add new profile.
   * @Return The new profileInfo.
   */
  saveAndFlushProfile = async (ctx: Koa.Context) => {
    // Get params
    const { id, userId, theme, motto } = ctx.request.body;
    const files = ctx.request.files;
    const profile: any = {
      userId: userId,
      theme: theme,
      motto: motto,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    };
    if (JSON.stringify(files) !== '{}') {
      const identifiers = await Upload.uploadAvatar(ctx);
      profile.avatarId = identifiers[0].id;
    }
    const profileRepository = getManager().getRepository(ProfileInfo);
    let result = null;
    result = await profileRepository.save({ ...profile, id });
    if (result.id) {
      const profileInfo = await queryProfile(userId);
      ctx.success({ profileInfo: profileInfo[0] }, 'upload profile success!');
    } else {
      ctx.fail('upload profile failed！', -1);
    }
  };

  /**
   * Delete user profile by id
   */
  deleteProfile = async (ctx: Koa.Context) => {
    const id = ctx.params.id;
    const profileRepository = getManager().getRepository(ProfileInfo);
    await profileRepository.delete(id);
    ctx.success({}, 'delete success!');
  };
}
