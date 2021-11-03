/**
 * This api without token can be access.
 */
import authController from '../controller/auth-controller';
import commonController from '../controller/common-controller';

export default [
  {
    path: '/api/v1/token',
    method: 'post',
    action: authController.auth
  },
  {
    path: '/api/v1/email',
    method: 'post',
    action: authController.getEmailCode
  },
  {
    path: '/api/v1/user',
    method: 'post',
    action: authController.createUser
  },
  {
    path: '/api/v1/profile/:userId',
    method: 'get',
    action: commonController.getProfile
  },
  {
    path: '/api/v1/uid/:userId',
    method: 'get',
    action: authController.getUid
  }
];
