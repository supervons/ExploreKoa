/**
 * WebSocketService, operation UserInfo.
 */
import * as Koa from 'koa';
import { emitter } from '../utils/common';
let users = {};
export default class WebSocketService {
  getTest = async (ctx: Koa.Context) => {
    let id: string = ctx.query.id as string;
    // Save user websocket info.
    users[id] = ctx;
    ctx.websocket.send('Connection success!');
    // Listen the client message.
    ctx.websocket.on('message', (message: string) => {
      const uid = JSON.parse(message).uId;
      if (!users[uid]) {
        ctx.websocket.send(`${uid} offline!`);
      } else {
        users[uid].websocket.send(JSON.parse(message).content);
      }
    });
    // Add global listener, support HTTP emit.
    emitter.listenerCount('refreshCount') === 0 &&
      emitter.on('refreshCount', function (arg1) {
        for (let index in users) {
          users[index]?.websocket.send(arg1);
        }
      });
    // Listen the client close.
    ctx.websocket.on('close', () => {
      // If user send close, remove from user list.
      if (users[id]) {
        users[id] = null;
      }
    });
  };
}
