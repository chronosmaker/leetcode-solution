/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var getNext = function (n) {
  let ret = 0;
  //   while (n) {
  //     ret += (n % 10) ** 2;
  //     n = parseInt(n / 10);
  //   }
  const str = n + '';
  for (let i = 0, len = str.length; i < len; i++) {
    ret += (+str[i]) ** 2;
  }
  return ret;
};

var isHappy = function (n) {
  if (n === 1) {
    return true;
  }
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  if (fast === slow) {
    return false;
  }
  return true;
};
// @lc code=end
