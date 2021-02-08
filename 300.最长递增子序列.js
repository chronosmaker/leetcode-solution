/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return 1;
  }
  const p = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && p[i] <= p[j]) {
        p[i] = p[j] + 1;
      }
    }
  }
  return Math.max(...p);
};
// @lc code=end
