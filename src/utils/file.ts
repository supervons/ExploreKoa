import moment = require('moment');
import { FileInfo } from 'src/entity/FileInfo';
import { getManager } from 'typeorm';
/**
 * @description file upload tool, Support for multiple file uploads.
 * @param files, obejct or file list.
 * @returns files identifiers.
 */
export async function upload(files) {
  let fileList = [];
  // if there are multiple files
  if (files.files.length) {
    files.files.map(res => {
      fileList.push({ ...res, fileSize: res.size });
    });
  } else {
    fileList.push({ ...files.files, fileSize: files.files.size });
  }
  const fileRepository = getManager().getRepository(FileInfo);
  const { identifiers } = await fileRepository.insert(fileList);
  return identifiers;
}
