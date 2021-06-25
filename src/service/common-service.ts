import * as Upload from '../utils/file';
export default class HomeService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'));
  };
  upload = ctx => {
    const filePaths = [];
    const files = ctx.request.files;
    const fileInfo = Upload.upload(files);
    console.log(JSON.stringify(fileInfo));
    ctx.body = filePaths;
  };
}
