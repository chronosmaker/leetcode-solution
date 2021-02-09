/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let head = 1,
    tail = n,
    mid;
  while (head <= tail) {
    mid = ((head ^ tail) >> 1) + (head & tail);
    const res = guess(mid);
    if (res < 0) {
      tail = mid - 1;
    } else if (res > 0) {
      head = mid + 1;
    } else {
      return mid;
    }
  }
};
// @lc code=end
