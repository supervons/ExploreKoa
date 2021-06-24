/**
 * 受保护路由，需携带token访问
 */
import homeController from '../controller/home-controller';
import userController from '../controller/user-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  },
  {
    path: '/users',
    method: 'get',
    action: userController.getUsers
  },
  {
    path: '/user/:id',
    method: 'get',
    action: userController.getUser
  },
  {
    path: '/user',
    method: 'post',
    action: userController.createUser
  },
  {
    path: '/user/:id',
    method: 'delete',
    action: userController.deleteUser
  },
  {
    path: '/user/:id',
    method: 'put',
    action: userController.updateUser
  }
];
