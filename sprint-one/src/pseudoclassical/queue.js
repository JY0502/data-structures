var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.storage = {};
    this.countIn = 0;
    this.countOut = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.countIn] = value;
  this.countIn++;
}

Queue.prototype.dequeue = function() {
  if (this.countIn > this.countOut) {
    var result = this.storage[this.countOut];
    delete this.storage[this.countOut];
    this.countOut++;
    return result;
  }
}

Queue.prototype.size = function() {
  return this.countIn - this.countOut;
}