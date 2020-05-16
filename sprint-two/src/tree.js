//this is a tree node
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.value = value;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  //if the value of the tree node contains the target, return true
  //end condition if nodes have no more children, return false

    if (this.value === target) {
      return true;
    } else {
  //iterate over all the nodes that don't have children

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.contains(target)) {
        return true;
        }
      }
    }
    return false;
  //otherwise, iterate over each children node to see if their value is equal to the target
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1);
 contains: O(n^2);
 */