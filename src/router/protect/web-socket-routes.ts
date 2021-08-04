/**
 * WebSocket routes.
 */
import webSocketController from '../../controller/web-socket-controller';

export default [
  {
    path: '/ws/test',
    method: 'get',
    action: webSocketController.getTest
  }
];
