const fs = require('fs');
const child_process = require('child_process');
fs.rmdir(
  `${process.cwd()}/dist`,
  {
    recursive: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('清理成功，即将构建');
    }
    child_process.exec('npm run build', error => {
      if (!error) {
        // 成功
        console.log('构建完毕');
      } else {
        console.log(error);
        // 失败
      }
    });
  }
);
