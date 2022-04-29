/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number[]} ind
 */
var reverse = function (arr, n, ind) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    ind[arr[i]] = i;
    ind[arr[j]] = j;
  }
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let ret = [];
  let ind = [];
  for (let i = 0; i < arr.length; i++) ind[arr[i]] = i;
  for (let i = arr.length; i >= 1; i--) {
    if (ind[i] + 1 === i) continue;
    if (ind[i] + 1 !== 1) {
      ret.push(ind[i] + 1);
      reverse(arr, ind[i] + 1, ind);
    }
    if (i !== 1) {
      ret.push(i);
      reverse(arr, i, ind);
    }
  }

  return ret;
};
// @lc code=end
