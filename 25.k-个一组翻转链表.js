/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var __reverseN = function (head, n) {
  if (n === 1) return head;
  let tail = head.next;
  let pre = __reverseN(head.next, n - 1);
  head.next = tail.next;
  tail.next = head;
  return pre;
};

var reverseN = function (head, n) {
  let p = head;
  let cnt = n;
  while (--n && p) p = p.next;
  if (p === null) return head;
  return __reverseN(head, cnt);
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let ret = new ListNode(0, head);
  let p = ret;
  let q = p.next;
  while ((p.next = reverseN(q, k)) !== q) {
    p = q;
    q = p.next;
  }
  return ret.next;
};
// @lc code=end
