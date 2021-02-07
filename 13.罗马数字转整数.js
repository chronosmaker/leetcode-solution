/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const Type = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let num = 0;
  for (let idx = 0; idx < s.length; idx++) {
    const i = Type.get(s[idx]),
      n = Type.get(s[idx + 1]);
    if ((i === 1 || i === 10 || i === 100) && (n === 5 * i || n === 10 * i)) {
      num += n - i;
      idx++;
    } else {
      num += i;
    }
  }
  return num;
};
// @lc code=end
