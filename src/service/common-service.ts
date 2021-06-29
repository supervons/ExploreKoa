import moment = require('moment');
import { getManager, getConnection, createQueryBuilder } from 'typeorm';
import { ProfileInfo } from '../entity/ProfileInfo';
import { AvatarInfo } from '../entity/AvatarInfo';
import { FileInfo } from '../entity/FileInfo';
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

  /**
   * Use leftJoinAndSelect query profile related tables.
   * The getRawMany() returns original data.
   * You should use select() Choose the data you need.
   */
  getProfile = async ctx => {
    ctx.success(
      {
        profile: await createQueryBuilder('ProfileInfo')
          .leftJoinAndSelect(
            AvatarInfo,
            'avatar',
            'avatar.id = ProfileInfo.avatar_id'
          )
          .leftJoinAndSelect(FileInfo, 'file', 'file.id = avatar.file_id')
          .select(
            `ProfileInfo.id, ProfileInfo.user_id,ProfileInfo.theme,ProfileInfo.motto, file.file_access_path`
          )
          .getRawMany()
      },
      'upload profile success!'
    );
  };

  profile = async ctx => {
    // get params
    const files = ctx.request.files;
    const { userId, theme, motto } = ctx.request.body;
    const origin = ctx.request.origin;
    const fileIds = await Upload.upload(files, origin);
    // add avatar
    const avatarRepository = getManager().getRepository(AvatarInfo);
    const avatar = {
      userId: userId,
      fileId: fileIds[0].id,
      status: 1,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    };
    const { identifiers } = await avatarRepository.insert(avatar);
    // add profile
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
