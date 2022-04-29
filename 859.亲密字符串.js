/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var hasRepeat = function (s) {
  var cnt = new Array(26).fill(0);
  for (var i = 0; s[i]; i++) {
    var idx = s[i].charCodeAt() - 'a'.charCodeAt();
    cnt[idx]++;
    if (cnt[idx] > 1) return true;
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) return hasRepeat(s);
  var i = 0;
  var j = 0;
  while (s[i] === goal[i]) i++;
  j = i + 1;
  while (j < s.length && s[j] === goal[j]) j++;
  if (j === s.length) return false;
  if (s[i] !== goal[j] || s[j] !== goal[i]) return false;
  j++;
  while (j < s.length) {
    if (s[j] !== goal[j]) return false;
    j++;
  }
  return true;
};
// @lc code=end
