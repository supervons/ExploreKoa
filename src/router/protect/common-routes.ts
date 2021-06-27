/**
 * 受保护路由，需携带token访问
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
  }
];
