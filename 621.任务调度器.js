/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;
  let cnt = new Array(26).fill(0);
  for (let i = 0; i < tasks.length; i++) {
    cnt[tasks[i].charCodeAt() - 'A'.charCodeAt()]++;
  }
  cnt.sort((a, b) => b - a);
  let m = 1;
  for (let i = 1; i < 26 && cnt[i] === cnt[0]; i++) m++;
  return Math.max(tasks.length, (cnt[0] - 1) * (n + 1) + m);
};
// @lc code=end
