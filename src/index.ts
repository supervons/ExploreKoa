import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as jwt from 'koa-jwt';
import * as Router from 'koa-router';
import * as staticFiles from 'koa-static';
import * as websocket from 'koa-websocket';
import * as path from 'path';
import 'reflect-metadata';
// import router
import FileRoutes from './router/protect/common-routes';
import UserRoutes from './router/protect/user-routes';
import WebSocketRoutes from './router/protect/web-socket-routes';
import UnprotectRoutes from './router/unprotect-routes';
// import middleware
import routerResponse from './middle/response';
// import env values.
import { createConnection } from 'typeorm';
import { FILE_UPLOAD_PATH, PORT } from './config';
import { JWT_SECRET } from './constants';
import moment = require('moment');
createConnection();
const app = websocket(new Koa());
// log
const Axe = require('axe');
const Cabin = require('cabin');
const { Signale } = require('signale');
// import current env
const env = process.env.NODE_ENV;
// initialize a new instance of Axe
const logger = new Axe({
  logger: new Signale(),
  level: env === 'production' ? 'error' : 'info'
});
const cabin = new Cabin({ logger });
// create router
const router = new Router();
const fileRouter = new Router();
const WebSocketRouter = new Router();
const UnprotectRouter = new Router();
//Unprotected routes
UnprotectRoutes.forEach(route =>
  UnprotectRouter[route.method](route.path, route.action)
);
// needs JWT-TOKEN routes
UserRoutes.forEach(route => router[route.method](route.path, route.action));
// needs JWT-TOKEN routes
WebSocketRoutes.forEach(route =>
  WebSocketRouter[route.method](route.path, route.action)
);
// needs JWT-TOKEN & file routes
FileRoutes.forEach(route => fileRouter[route.method](route.path, route.action));
// use log
app.use(cabin.middleware);
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
app.ws.use(WebSocketRouter.routes());
app.ws.use(WebSocketRouter.allowedMethods());
// this koaBody allow file upload.
app.use(
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      uploadDir: path.join(FILE_UPLOAD_PATH),
      onFileBegin: (name, file) => {
        // The mapping file entity.
        const fileArray = file.name.split('.');
        const fileSuffix = `.${fileArray[fileArray.length - 1]}`;
        file.fileName = moment().valueOf() + fileSuffix;
        file.path = FILE_UPLOAD_PATH + file.fileName;
        file.filePath = file.path;
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
