var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //Time: O(1)
//push a new tree that contains value and potential children
  //what to add? another  Tree(value)
  //where to add to? this.children.push(Tree(value))
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) { //Time: O(n)
  //check the this.value === target
  // check if this.children.length > 0
        // if it does iterater through this.children
              //each children calls contains
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for(var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      if (child.contains(target)) {
        return true;
      }
    }
    return false;
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
