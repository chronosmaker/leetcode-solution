/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let cnt5 = 0;
  let cnt10 = 0;
  for (let i = 0; i < bills.length; i++) {
    const b = bills[i];
    if (b === 5) {
      cnt5++;
    } else if (b === 10) {
      if (cnt5 > 0) {
        cnt5--;
        cnt10++;
      } else {
        return false;
      }
    } else if (b === 20) {
      if (cnt10 > 0 && cnt5 > 0) {
        cnt5--;
        cnt10--;
      } else if (cnt5 >= 3) {
        cnt5 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
