import moment = require('moment');
import * as Koa from 'koa';
import { getManager } from 'typeorm';
import { AvatarInfo } from '../entity/AvatarInfo';
import { FileInfo } from '../entity/FileInfo';
/**
 * @description File upload tool, Support for multiple file uploads.
 * @param files, obejct or file list.
 * @returns files identifiers.
 */
export async function upload(files, origin) {
  let fileList = [];
  // if there are multiple files
  if (files?.files.length) {
    files.files.map(res => {
      fileList.push({
        ...res,
        fileSize: res.size,
        fileAccessPath: `${origin}/${res.fileName}`
      });
    });
  } else {
    if (!files) {
      return false
    }
    fileList.push({
      ...files.files,
      fileSize: files.files.size,
      fileAccessPath: `${origin}/${files.files.fileName}`
    });
  }
  const fileRepository = getManager().getRepository(FileInfo);
  const { identifiers } = await fileRepository.insert(fileList);
  return identifiers;
}

/**
 * @description Avatar upload api.
 * @param ctx request params.
 * @returns A successful insert returns the primary key
 */
export async function uploadAvatar(ctx: Koa.Context) {
  // get params
  const { files, origin } = ctx.request.files;
  const { userId } = ctx.request.body;
  const fileIds = await this.upload(files, origin);
  // add avatar
  const avatarRepository = getManager().getRepository(AvatarInfo);
  const avatar = {
    userId: userId,
    fileId: fileIds[0].id,
    status: 1,
  };
  const { identifiers } = await avatarRepository.insert(avatar);
  return identifiers;
}
