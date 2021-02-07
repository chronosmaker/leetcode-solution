/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let num = 0;
  while (x !== 0) {
    num = num * 10 + (x % 10);
    x = parseInt(x / 10 + '', 10);
  }
  return num < INT_MIN || num > INT_MAX ? 0 : num;
};

// var reverse = function (x) {
//   const xx = Math.abs(x),
//     INT_MAX = 2147483647,
//     INT_MIN = -2147483648;
//   const num = +(xx + '').split('').reverse().join('');
//   if (num > INT_MAX || num < INT_MIN) {
//     return 0;
//   }
//   return x < 0 ? -num : num;
// };

// @lc code=end
