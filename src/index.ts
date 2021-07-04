import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';
import * as jwt from 'koa-jwt';
import * as staticFiles from 'koa-static';
import * as path from 'path';
import 'reflect-metadata';
import UnprotectRoutes from './router/unprotect-routes';
import UserRoutes from './router/protect/user-routes';
import FileRoutes from './router/protect/common-routes';
import routerResponse from './middle/response';
import { PORT, FILE_UPLOAD_PATH } from './config';
import { JWT_SECRET } from './constants';
import { createConnection } from 'typeorm';
import moment = require('moment');
createConnection();
const app = new Koa();
const router = new Router();
const fileRouter = new Router();
const UnprotectRouter = new Router();
//Unprotected routes
UnprotectRoutes.forEach(route =>
  UnprotectRouter[route.method](route.path, route.action)
);
// needs JWT-TOKEN routes
UserRoutes.forEach(route => router[route.method](route.path, route.action));
// needs JWT-TOKEN & file routes
FileRoutes.forEach(route => fileRouter[route.method](route.path, route.action));
// open public file dir
app.use(staticFiles(path.join(FILE_UPLOAD_PATH)));
app.use(routerResponse());
app.use(koaBody());
app.use(UnprotectRouter.routes());
app.use(UnprotectRouter.allowedMethods());
// JWT middle ware
app.use(jwt({ secret: JWT_SECRET }));
app.use(router.routes());
app.use(router.allowedMethods());
// this koaBody allow file upload.
app.use(
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      uploadDir: path.join(FILE_UPLOAD_PATH),
      onFileBegin: (name, file) => {
        // The mapping file entity.
        file.path = FILE_UPLOAD_PATH + file.name;
        file.filePath = file.path;
        file.fileName = file.name;
        file.fileType = file.type;
        file.createTime = moment().format('YYYY-MM-DD HH:mm');
      }
    }
  })
);
app.use(fileRouter.routes());
app.use(fileRouter.allowedMethods());
// add a listen.
module.exports = app.listen(PORT, () => {
  console.log('server is running at http://localhost:' + PORT);
});
