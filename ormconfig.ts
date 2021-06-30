const env = process.env.NODE_ENV;

module.exports = {
  type: 'mysql',
  host: 'YOUR_DATABASE_HOST',
  port: 3306,
  username: 'YOUR_DATABASE_USERNAME',
  password: 'YOUR_DATABASE_USERNAME',
  database: 'YOUR_DATABASE',
  synchronize: false,
  entities: [`${env === 'development' ? 'src/' : 'dist/src/'}entity/*{.js,.ts}`]
};
