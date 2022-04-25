/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
  let tail = head.next; // 当前的尾结点
  let p = __reverseN(head.next, n - 1); // p 为翻转后的头节点
  head.next = tail.next; // 将 head 的下一个节点指向 tail 的下一个节点
  tail.next = head; // 将 tail 的下一个节点指向 head 节点
  return p;
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let ret = new ListNode(0, head); // 设置虚拟头节点
  let p = ret; // 待翻转节点的前一个节点
  let q = p.next; // 待翻转节点的头节点
  // 循环翻转每两个节点
  while ((p.next = reverseN(q, 2)) !== q) {
    p = q;
    q = p.next;
  }
  return ret.next;
};
// @lc code=end
