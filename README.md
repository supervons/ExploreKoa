[简体中文](./README.md) | [English](./README.en.md)

### Koa2 + Typescript 构建的后端项目，全栈工程师必学（嘘！防止后端人员跑路时，没人写接口的尴尬局面）！！！

前端项目地址：https://github.com/supervons/ExploreRN

### 已完成

- [x] 项目基础搭建
- [x] 登录注册
- [x] 接口鉴权 - JWT
- [x] 修改密码、用户信息
- [x] 头像、皮肤、签名等 profile 相关信息 CURD 接口
- [x] WebSocket 接口编写

### 待开发

- [ ] 发送邮件
- [ ] log4j 日志中间件
- [ ] 基于 redis 列表查询加速

### 项目启动-开发

```
npm install
npm run start
```

### 项目 pm2 部署

```
npm run build
npm run pro
```

### 项目结构

```
.
├── src
│   ├── controller        //controller层
│   ├── entity            //实体类
│   ├── redis             //redis相关配置及工具类
│   ├── router            //路由配置
│   ├── service           //service层
│   ├── config.ts         //配置文件
│   ├── constants.ts      //项目常量
│   └── index.ts          //项目入口index.js
├── .env                  //配置文件
├── ecosystem.config.js   //pm2配置
├── ormconfig.json        //数据库 ORM 配置文件
├── nodemon.json          //nodemon配置
├── package.json          //npm 安装包
└── tsconfig.json         //ts配置文件
```

### 数据库表结构

<img src="./public/explore.png" alt="表结构" align="center"/>



## 运行前准备

- `MySQL`
- `Redis`

建议使用 `Docker` 进行安装，方便快捷

## 启动前配置项

### `Redis` 配置

`.env` 中进行配置

- `PORT_REDIS` Redis 端口
- `HOST_REDIS` Redis HOST
- `PASSWORD_REDIS` Redis password

### MySQL 数据库配置

`ormconfig.ts`中进行配置：

- `type` 数据库类型
- `host`主机名

具体参考 https://github.com/typeorm/typeorm

### 邮件服务配置

`src/utils/email.ts` 中进行配置

- `host` 主机名
- `port` 端口
- `auth`  认证信息
  - `user` 邮件用户，将会以此进行发送
  - `pass` 通行证，一般在邮件供应商设置中获取

### 数据库文件位置

```
./public/mysql.sql
```
