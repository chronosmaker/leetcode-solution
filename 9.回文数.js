/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let y = 0,
    tmp = x;
  while (tmp !== 0) {
    y = y * 10 + (tmp % 10);
    tmp = parseInt(tmp / 10 + '', 10);
  }
  return y === x;
};

// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   if (x === 0) {
//     return true;
//   }
//   if (x % 10 === 0) {
//     return false;
//   }
//   const xx = x + '';
//   return xx === xx.split('').reverse().join('');
// };

// @lc code=end
