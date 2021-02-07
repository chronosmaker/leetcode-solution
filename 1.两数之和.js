/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const temp = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (temp.has(element)) {
      return [temp.get(element), index];
    } else {
      temp.set(target - element, index);
    }
  }
};
// @lc code=end
