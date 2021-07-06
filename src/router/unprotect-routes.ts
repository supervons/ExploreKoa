/**
 * This api without token can be access.
 */
import authController from '../controller/auth-controller';

export default [
  {
    path: '/api/v1/token',
    method: 'post',
    action: authController.auth
  }
];
