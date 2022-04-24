/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
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

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  let slow = n;
  let fast = n;
  do {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (fast !== slow && fast !== 1);
  return fast === 1;
};
// @lc code=end
