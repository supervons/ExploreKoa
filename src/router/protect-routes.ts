/**
 * 受保护路由，需携带token访问
 */
import homeController from '../controller/home-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  }
];
