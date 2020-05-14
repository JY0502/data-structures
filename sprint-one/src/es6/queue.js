class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.countIn = 0;
    this.countOut = 0;
  }
  enqueue(value) {
    this.storage[this.countIn] = value;
    this.countIn++;
  }
  dequeue() {
    if (this.countIn > this.countOut) {
      let result = this.storage[this.countOut];
      delete this.storage[this.countOut];
      this.countOut++;
      return result;
    }
  }
  size() {
    return this.countIn - this.countOut;
  }
}