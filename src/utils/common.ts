/**
 * Random string function.
 * Remove I,1,L;O0;
 * @param length Random string length.
 */
export function getRandomString(length: number) {
  let charSet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let maxPos = charSet.length;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += charSet.charAt(Math.floor(Math.random() * maxPos));
  }
  return code;
}
