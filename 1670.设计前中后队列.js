/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var Node = function (val) {
  this.val = val;
  this.pre = null;
  this.next = null;

  this.insert_pre = function (p) {
    p.pre = this.pre;
    p.next = this;
    this.pre && (this.pre.next = p);
    this.pre = p;
  };
  this.insert_next = function (p) {
    p.pre = this;
    p.next = this.next;
    this.next && (this.next.pre = p);
    this.next = p;
  };
  this.delete_pre = function () {
    if (!this.pre) return -1;
    var p = this.pre;
    this.pre = p.pre;
    p.pre && (p.pre.next = this);
    return p.val;
  };
  this.delete_next = function () {
    if (!this.next) return -1;
    var p = this.next;
    this.next = p.next;
    p.next && (p.next.pre = this);
    return p.val;
  };
};

var Queue = function () {
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.cnt = 0;

  this.pushFront = function (val) {
    this.head.insert_next(new Node(val));
    this.cnt++;
  };
  this.pushBack = function (val) {
    this.tail.insert_pre(new Node(val));
    this.cnt++;
  };
  this.popFront = function () {
    if (this.isEmpty()) return -1;
    this.cnt--;
    return this.head.delete_next();
  };
  this.popBack = function () {
    if (this.isEmpty()) return -1;
    this.cnt--;
    return this.tail.delete_pre();
  };
  this.isEmpty = function () {
    return this.head.next === this.tail;
  };
  this.size = function () {
    return this.cnt;
  };
};

var FrontMiddleBackQueue = function () {
  this.q1 = new Queue();
  this.q2 = new Queue();

  this.isEmpty = function () {
    return this.q1.size() + this.q2.size() === 0;
  };
  this.update = function () {
    if (this.q1.size() < this.q2.size()) {
      this.q1.pushBack(this.q2.popFront());
    } else if (this.q1.size() === this.q2.size() + 2) {
      this.q2.pushFront(this.q1.popBack());
    }
  };
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.q1.pushFront(val);
  this.update();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.q1.size() > this.q2.size()) {
    this.q2.pushFront(this.q1.popBack());
  }
  this.q1.pushBack(val);
  this.update();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.q2.pushBack(val);
  this.update();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.isEmpty()) return -1;
  var ret = this.q1.popFront();
  this.update();
  return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.isEmpty()) return -1;
  var ret = this.q1.popBack();
  this.update();
  return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.isEmpty()) return -1;
  var ret = this.q2.isEmpty() ? this.q1.popBack() : this.q2.popBack();
  this.update();
  return ret;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
