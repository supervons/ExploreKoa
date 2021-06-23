/**
 * 无需token访问路由
 */
import authController from '../controller/auth-controller';

export default [
  {
    path: '/auth',
    method: 'get',
    action: authController.auth
  }
];
