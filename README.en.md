[简体中文](./README.md) | [English](./README.en.md)

### KOA2 + TypeScript built back-end projects that full stack engineers must learn !!!

The front-end project address: https://github.com/supervons/ExploreRN

1. Login registration;
2. Interface authentication;
3. Redis-based list query acceleration;
4. Modify password and user information;
5. Upload and modify the avatar;

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

### database file path

```
./public/mysql.sql
```

### Finished

- [x] Project Init
- [x] Login and Register
- [x] api add authentication - JWT
- [x] update password and user information

### TODO-LIST

- [ ] Redis-based list query acceleration
- [ ] profile upload modification
