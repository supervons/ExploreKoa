import { createQueryBuilder } from 'typeorm';
import { AvatarInfo } from '../entity/AvatarInfo';
import { FileInfo } from '../entity/FileInfo';
/**
 * User profile query tool.
 * @param userId
 * @returns user profile info.
 */
export default async function queryProfile(userId: string) {
  return await createQueryBuilder('ProfileInfo')
    .leftJoinAndSelect(
      AvatarInfo,
      'avatar',
      'avatar.id = ProfileInfo.avatar_id'
    )
    .leftJoinAndSelect(FileInfo, 'file', 'file.id = avatar.file_id')
    .where(userId ? `ProfileInfo.user_id = '${userId}'` : ``)
    .select(
      `ProfileInfo.id, ProfileInfo.user_id,ProfileInfo.theme,ProfileInfo.motto, file.file_access_path`
    )
    .getRawMany();
}
