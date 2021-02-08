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
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// var hasCycle = function (head) {
//   const temp = new Set();
//   while (!!head) {
//     if (temp.has(head.next)) {
//       return true;
//     } else {
//       temp.add(head);
//     }
//     head = head.next;
//   }
//   return false;
// };
// @lc code=end
