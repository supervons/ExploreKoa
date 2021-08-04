import WebSocketService from '../service/web-socket-service';
import * as Koa from 'koa';
/**
 * WebSocket Controller.
 * For client/server both-way communication.
 */
class WebSocketController {
  private service: WebSocketService = new WebSocketService();

  getTest = async (ctx: Koa.Context) => {
    await this.service.getTest(ctx);
  };
}

export default new WebSocketController();
