/**
 * WebSocketService, operation UserInfo.
 */
import * as Koa from 'koa';
let users = {};
export default class WebSocketService {
  getTest = async (ctx: Koa.Context) => {
    let id: string = ctx.query.id as string;
    // Save user websocket info.
    users[id] = ctx;
    ctx.websocket.send('Connection success!');
    // Listen the client message.
    ctx.websocket.on('message', function (message) {
      const uid = JSON.parse(message).uId;
      if (!users[uid]) {
        ctx.websocket.send(`${uid} offline!`);
      } else {
        users[uid].websocket.send(JSON.parse(message).content);
      }
    });
    // Listen the client close.
    ctx.websocket.on('close', function (message) {
      // If user send close, remove from user list.
      if (users[id]) {
        users[id] = null;
      }
    });
  };
}
