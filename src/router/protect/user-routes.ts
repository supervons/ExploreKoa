/**
 * This file about user operation api.
 * Protected routes that need to carry tokens for access
 */
import userController from '../../controller/user-controller';

export default [
  {
    path: '/api/v1/users/:pageNumber/:pageSize/:searchWord',
    method: 'get',
    action: userController.getUsers
  },
  {
    path: '/api/v1/users/:pageNumber/:pageSize',
    method: 'get',
    action: userController.getUsers
  },
  {
    path: '/api/v1/user/:id',
    method: 'get',
    action: userController.getUser
  },
  {
    path: '/api/v1/user',
    method: 'post',
    action: userController.createUser
  },
  {
    path: '/api/v1/user/:id',
    method: 'delete',
    action: userController.deleteUser
  },
  {
    path: '/api/v1/user/:id',
    method: 'put',
    action: userController.updateUser
  },
  {
    path: '/api/v1/user/password/:id',
    method: 'put',
    action: userController.updatePassword
  }
];
