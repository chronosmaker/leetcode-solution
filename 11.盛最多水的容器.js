/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const x = j - i;
    const y = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(max, x * y);
  }
  return max;
};
// @lc code=end

//   // timeout;
//   let max = 0;
//   const len = height.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const x = j - i;
//       const y = height[i] < height[j] ? height[i] : height[j];
//       const res = x * y;
//       max = max > res ? max : res;
//     }
//   }
//   return max;
