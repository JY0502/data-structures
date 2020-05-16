var BinarySearchTree = function(value) {
  this.value = value;
  this.left; //all values are lower than the current value.
  this.right; // all values are higher than the current value
  //we need a recursion
  console.log(this);
}

BinarySearchTree.prototype.insert = function(newValue) {
  //which accepts a value and places it in the tree in the correct position.

  //create new node
  var newNode = new BinarySearchTree(newValue);

  // create recursive function (node)
  function findNode(node) {
    // if newValue > this.value, check if this.right is undefined
    if (newValue > node.value) {
      //if undefined, this.right = new node
      if (node.right === undefined) {
        node.right = newNode;
      } else {
      //if not, recurse through recursive function on the right
        findNode(node.right)
      }
    } else if (newValue < node.value) {
      //if undefined, that.left = new node
      if (node.left === undefined) {
        node.left = newNode;
      } else {
      //if not, recurse through recursive function on the left
        findNode(node.left);
      }
    }
  };

  //call recursive function on root node
  findNode(this);
};

BinarySearchTree.prototype.contains = function(target) {
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  var contains = false;

  function findNodes(node) {

    if (node.value === target) {
      contains = true;
    } else {
      if (target > node.value && node.right) {
        findNodes(node.right);
      }
      if (target < node.value && node.left) {
        findNodes(node.left);
      }
    }
  }
  findNodes(this);
  return contains;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //accepts a callback and executes it on every value contained in the tree.

  function traverseNodes(node) {
    if (node.value) {
      cb(node.value);
    }
    if (node.left) {
      traverseNodes(node.left);
    }
    if (node.right) {
      traverseNodes(node.right);
    }
  };

  traverseNodes(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: log(n);
  contains: log(n);
  depthFirstLog: O(n);
 */