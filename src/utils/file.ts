import * as fs from 'fs';
/**
 * file upload tool
 * @param files
 * @returns
 */
export function upload(files) {
  const filePaths = [];
  for (let key in files) {
    const file = files[key];
    const fileName = file.name;
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(fileName);
    reader.pipe(writer);
    filePaths.push(file.path);
  }
  return filePaths;
}
