var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.countIn = 0;
  instance.countOut = 0;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.countIn] = value;
  this.countIn++;
}

queueMethods.dequeue = function() {
  if (this.countIn !== this.countOut) {
    var result = this.storage[this.countOut];
    delete this.storage[this.countOut];
    this.countOut++;
    return result;
  }
}

queueMethods.size = function() {
  return this.countIn - this.countOut;
}