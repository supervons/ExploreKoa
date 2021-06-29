import moment = require('moment');
import { ProfileInfo } from '../entity/ProfileInfo';
import { getManager } from 'typeorm';
import { AvatarInfo } from '../entity/AvatarInfo';
import * as Upload from '../utils/file';
export default class HomeService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };

  upload = async ctx => {
    const files = ctx.request.files;
    const origin = ctx.request.origin;
    const fileIds = await Upload.upload(files, origin);
    if (fileIds) {
      ctx.success({ fileInfo: fileIds }, 'upload file success!');
    } else {
      ctx.fail('upload file failed！', -1);
    }
  };

  getProfile = async ctx => {};

  profile = async ctx => {
    const files = ctx.request.files;
    const { userId, theme, motto } = ctx.request.body;
    const origin = ctx.request.origin;
    const fileIds = await Upload.upload(files, origin);
    const avatarRepository = getManager().getRepository(AvatarInfo);
    const avatar = {
      userId: userId,
      fileId: fileIds[0].id,
      status: 1,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    };
    const { identifiers } = await avatarRepository.insert(avatar);
    const profileRepository = getManager().getRepository(ProfileInfo);
    const profile = {
      userId: userId,
      avatarId: identifiers[0].id,
      theme: theme,
      motto: motto,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    };
    const result = await profileRepository.insert(profile);
    if (result.identifiers) {
      ctx.success(null, 'upload profile success!');
    } else {
      ctx.fail('upload profile failed！', -1);
    }
  };
}
