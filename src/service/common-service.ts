import moment = require('moment');
import { getManager, createQueryBuilder } from 'typeorm';
import { ProfileInfo } from '../entity/ProfileInfo';
import { AvatarInfo } from '../entity/AvatarInfo';
import { FileInfo } from '../entity/FileInfo';
import * as Upload from '../utils/file';
/**
 * CommonService, includes user profile, file upload.
 */
export default class CommonService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };

  /**
   * General file upload
   * @returns file ids
   */
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

  /**
   * Add profile.
   */
  saveAndFlushProfile = async ctx => {
    // Get params
    const { id, userId, theme, motto } = ctx.request.body;
    const identifiers = await Upload.uploadAvatar(ctx);
    // Add profile
    const profileRepository = getManager().getRepository(ProfileInfo);
    const profile = {
      userId: userId,
      avatarId: identifiers[0].id,
      theme: theme,
      motto: motto,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    };
    let result = null;
    // If params have id, denote update profile.
    result = await profileRepository.save({ ...profile, id });
    console.log(JSON.stringify(result));
    // Add or update success
    if (result.id) {
      ctx.success(null, 'upload profile success!');
    } else {
      ctx.fail('upload profile failed！', -1);
    }
  };

  /**
   * Delete user profile by id
   */
  deleteProfile = async ctx => {
    const id = ctx.params.id;
    const profileRepository = getManager().getRepository(ProfileInfo);
    await profileRepository.delete(id);
    ctx.success({}, 'delete success!');
  };
}
