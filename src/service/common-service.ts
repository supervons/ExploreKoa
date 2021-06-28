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
}