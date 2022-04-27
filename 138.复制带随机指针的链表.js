/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let p = head;
  let q;
  while (p) {
    q = new Node(p.val, p.next, p.random);
    p.next = q;
    p = q.next;
  }
  p = head.next;
  while (p) {
    p.random && (p.random = p.random.next);
    (p = p.next) && (p = p.next);
  }
  let newHead = head.next;
  p = head;
  while (p) {
    q = p.next;
    p.next = q.next;
    p.next && (q.next = p.next.next);
    p = p.next;
  }
  return newHead;
};
// @lc code=end
