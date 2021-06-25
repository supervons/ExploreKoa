/**
 * 受保护路由，需携带token访问
 */
import commonController from '../controller/common-controller';
import userController from '../controller/user-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: commonController.hello
  },
  {
    path: '/api/v1/users',
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
    path: '/api/v1/upload',
    method: 'post',
    action: commonController.upload
  }
];
