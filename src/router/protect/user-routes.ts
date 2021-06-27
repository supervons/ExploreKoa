/**
 * 受保护路由，需携带token访问
 */
import userController from '../../controller/user-controller';

export default [
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
  }
];
