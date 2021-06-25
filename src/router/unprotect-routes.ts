/**
 * 无需token访问路由
 */
import authController from '../controller/auth-controller';

export default [
  {
    path: '/api/v1/token',
    method: 'post',
    action: authController.auth
  }
];
