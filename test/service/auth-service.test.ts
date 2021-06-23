import 'mocha';
import * as chai from 'chai';
import * as server from '../../src/index';
import chaiHttp = require('chai-http');
import { default_redis } from '../../src/redis/redisOperate';
let should = chai.should();
chai.use(chaiHttp);

describe('Api 测试', function () {
  after(function () {
    console.log('end');
  });
  it('/auth should get status 200', done => {
    // 连接redis服务
    default_redis.connToRedis().then(res => {
      chai
        .request(server)
        .get('/auth')
        .end((err, res) => {
          console.log(JSON.stringify(res));
          res.should.have.status(200);
          done();
        });
    });
  });
});
