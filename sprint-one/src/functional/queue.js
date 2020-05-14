var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var countIn = 0;
  var countOut = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[countIn] = value;
    countIn++;
  };

  someInstance.dequeue = function() {
    if (storage[countOut] === undefined) {
      return undefined;
    }
    var result = storage[countOut];
    countOut++;
    return result;
  };

  someInstance.size = function() {
    return countIn - countOut;
  };

  return someInstance;
};
