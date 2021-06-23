import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as jwt from 'koa-jwt';
import * as staticFiles from 'koa-static';
import * as path from 'path';
import 'reflect-metadata';
import UnprotectRoutes from './router/unprotect-routes';
import ProtectRoutes from './router/protect-routes';
import { PORT } from './config';
import { JWT_SECRET } from './constants';
import { createConnection } from 'typeorm';
createConnection();
const app = new Koa();
const router = new Router();
const UnprotectRouter = new Router();
//未受保护路由
UnprotectRoutes.forEach(route =>
  UnprotectRouter[route.method](route.path, route.action)
);
//需JWT-TOKEN路由
ProtectRoutes.forEach(route => router[route.method](route.path, route.action));

app.use(staticFiles(path.join(__dirname, '../public')));
app.use(bodyParser());
app.use(UnprotectRouter.routes());
app.use(UnprotectRouter.allowedMethods());
app.use(jwt({ secret: JWT_SECRET }));
app.use(router.routes());
app.use(router.allowedMethods());
// add a listen.
module.exports = app.listen(PORT, () => {
  console.log('server is running at http://localhost:3000');
});
