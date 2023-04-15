[简体中文](./README.md) | [English](./README.en.md)

### KOA2 + TypeScript built back-end projects that full stack engineers must learn !!!

The front-end project address: https://github.com/supervons/ExploreRN

### Finished

- [x] Project Init
- [x] Login and Register
- [x] Api add authentication - JWT
- [x] Update password and user information
- [x] CURD function for profile information such as avatar, theme and motto
- [x] WebSocket API Demo
- [x] Send email
- [x] cabin + axe + signale log middleware

### TODO-LIST

- [ ] Change `typeorm` to `prisma`
- [ ] SQL optimize
- [ ] Redis-based list query acceleration

### Project Start - Develop

```
npm install
npm run start
```

### Project pm2 - Deploy

```
npm run build
npm run pro
```

### PROJECT DIR INTRODUCE

```
.
├── src
│   ├── controller        // controller
│   ├── entity
│   ├── redis             //redis config
│   ├── router            //route config
│   ├── service           //service
│   ├── config.ts         //project common config
│   ├── constants.ts      //project const value
│   └── index.ts          //entrance index.js
├── .env                  //config file
├── ecosystem.config.js   //pm2 config
├── ormconfig.json        //database ORM config file
├── nodemon.json          //nodemon config
├── package.json          //npm config
└── tsconfig.json         //ts config
```

### Table Structure

<img src="./public/explore.png" alt="Structure" align="center"/>

## Before Start

- MySQL
- Redis

Recommended `Docker`.

### Config

### Redis

`.env`

- `PORT_REDIS` Redis port
- `HOST_REDIS` Redis host
- `PASSWORD_REDIS` Redis password

### MySQL

`ormconfig.ts`

- `type` DB type
- `host` DB host

Read more: https://github.com/typeorm/typeorm

### Email

`src/utils/email.ts`

- `host` Your email provider host.
- `port`Your email provider part.
- `auth`
  - `user` Email account, sender by it.
  - `pass` Pass token, check your email provider setting.

### Database file path

```
./public/mysql.sql
```
