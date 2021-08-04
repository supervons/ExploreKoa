/**
 * WebSocketService, operation UserInfo.
 */
import * as Koa from 'koa';
let users = {};
export default class WebSocketService {
  getTest = async (ctx: Koa.Context) => {
    // 客户端链接传过来的客户端身份
    let id: string = ctx.query.id + '';
    // 将链接保存起来
    users[id] = ctx;
    ctx.websocket.send('连接成功');
    // 监听客户端发送过来的信息
    ctx.websocket.on('message', function (message) {
      // uid为接收方，将接收到的信息发送给接收方uid,可以根据自己的需求处理数据再发送
      const uid = JSON.parse(message).uId;
      if (!users[uid]) {
        ctx.websocket.send(`${uid}未上线`);
      } else {
        users[uid].websocket.send(JSON.parse(message).content);
      }
    });
  };
}
