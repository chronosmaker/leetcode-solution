/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let n = 1;
  let p = head;
  while (p.next) {
    p = p.next;
    n++;
  }
  p.next = head;
  k %= n; // k 可能套圈
  k = n - k;
  while (k--) p = p.next;
  head = p.next;
  p.next = null;
  return head;
};
// @lc code=end
