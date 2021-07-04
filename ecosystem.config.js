const { name } = require('./package.json');
const path = require('path');

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/src/index.js'),
      instances: require('os').cpus().length,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 8088
      },
      ignore_watch: ['node_modules', 'files', 'public']
    }
  ]
};
