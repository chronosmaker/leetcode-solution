/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseN = function (head, n) {
  if (n === 1) return head;
  let tail = head.next;
  let pre = reverseN(head.next, n - 1);
  head.next = tail.next;
  tail.next = head;
  return pre;
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let ret = new ListNode(0, head);
  let p = ret;
  let cnt = right - left + 1;
  while (--left) p = p.next;
  p.next = reverseN(p.next, cnt);
  return ret.next;
};
// @lc code=end
