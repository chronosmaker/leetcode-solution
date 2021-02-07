/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = '';
  if (strs.length) {
    for (let i = 0; i < strs[0].length; i++) {
      let s = strs[0][i];
      let flag = true;
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== s) {
          flag = false;
          break;
        }
      }
      if (flag) {
        res += s;
      } else {
        break;
      }
    }
  }
  return res;
};
// @lc code=end
