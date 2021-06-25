import * as fs from 'fs';
import moment = require('moment');
import { FileInfo } from 'src/entity/FileInfo';
import { getManager } from 'typeorm';
/**
 * @description file upload tool
 * @param files
 * @returns
 */
export async function upload(files) {
  const filePaths = [];
  for (let key in files) {
    const file = files[key];
    const fileName = file.name;
    const fileRepository = getManager().getRepository(FileInfo);
    const result = await fileRepository.insert({
      fileName: fileName,
      fileSize: file.size,
      filePath: file.path,
      fileType: file.type,
      createTime: moment().format('YYYY-MM-DD HH:mm')
    });
  }
  return filePaths;
}
