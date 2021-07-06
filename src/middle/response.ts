/**
 * Unified request results middleware
 * @param option Contains type, success failure/return code, return information
 * @returns
 */
function routerResponse(
  option = { type: 'json', successCode: 0, failCode: 99, successMsg: 'fail' }
) {
  return async function (ctx, next) {
    ctx.success = function (data, msg) {
      ctx.type = option.type;
      ctx.body = {
        code: option.successCode,
        msg: msg,
        data: data
      };
    };

    ctx.fail = function (msg, code) {
      ctx.type = option.type || 'json';
      ctx.body = {
        code: code || option.failCode,
        msg: msg || option.successMsg
      };
    };
    await next();
  };
}
export default routerResponse;
