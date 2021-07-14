/**
 * This file about common operation api.
 * Protected routes that need to carry tokens for access
 */
import commonController from '../../controller/common-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: commonController.hello
  },
  {
    path: '/api/v1/upload',
    method: 'post',
    action: commonController.upload
  },
  {
    path: '/api/v1/profiles',
    method: 'get',
    action: commonController.getProfile
  },
  {
    path: '/api/v1/profile/:userId',
    method: 'get',
    action: commonController.getProfile
  },
  {
    path: '/api/v1/profile',
    method: 'post',
    action: commonController.profile
  },
  {
    path: '/api/v1/profile',
    method: 'put',
    action: commonController.updateProfile
  },
  {
    path: '/api/v1/profile/:id',
    method: 'delete',
    action: commonController.deleteProfile
  }
];
