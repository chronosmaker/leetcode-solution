/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const temp = new Set();
  let next = head;
  while (!!next) {
    if (temp.has(next.next)) {
      return true;
    } else {
      temp.add(next);
    }
    next = next.next;
  }
  return false;
};
// @lc code=end
