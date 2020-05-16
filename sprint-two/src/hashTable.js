
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  if(!Array.isArray(arrayOfTuples)) {
    this._storage.set(index, [[k, v]]);
  } else {
    var duplicate = false;
    for (var i = 0; i < arrayOfTuples.length; i++) {
      if (arrayOfTuples[i][0] === k) {
        arrayOfTuples[i][1] = v;
        // this._storage[index][i].set(1, v);
        // arrayOfTuples[i].set(1, v);
        duplicate = true;
      }
    }
    if (!duplicate) {
      arrayOfTuples.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  for (var i = 0; i < arrayOfTuples.length; i++) {
    if (arrayOfTuples[i][0] === k) {
      return arrayOfTuples[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  for (var i = 0; i < arrayOfTuples.length; i++) {
    if (arrayOfTuples[i][0] === k) {
      arrayOfTuples[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(n);
  retrieve: O(n);
  remove: O(n);
 */



