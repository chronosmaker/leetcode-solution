/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e === '(') {
      stack.push(')');
    } else if (e === '{') {
      stack.push('}');
    } else if (e === '[') {
      stack.push(']');
    } else if (stack.length === 0 || e !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

// var isValid = function (s) {
//   if (s.length % 2) {
//     return false;
//   }
//   const len = s.length / 2;
//   for (let i = 0; i < len; i++) {
//     s = s.replace('()', '').replace('{}', '').replace('[]', '');
//   }
//   return s === '';
// };

// @lc code=end
