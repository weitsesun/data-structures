//start from one node which is an empty obj that we assign a value to.
//implement methods in a methods obj that we extend into the BST
//


var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
 _.extend(newTree, bstMeths);
 
 return newTree;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
 
var bstMeths = {};

 
bstMeths.insert = function(value) { //Time: O(log n)
  //if input value > this.value -> insert a new treeNode to the right
    //if right is occupied -> recursion
    //else: insert treeNode
  //to the same thing to the left
  var newNode = BinarySearchTree(value);
  //right
  if(value > this.value) {
    if(this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = newNode;
    }
  }
  //left
  if(value < this.value) {
    if(this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = newNode;
    }
  }
  
  };

bstMeths.contains = function(target) {//Time: O(log n)
  if (this.value === target) {
    return true;
  } else {
    if(target > this.value && this.right !== undefined) {
      return this.right.contains(target); //this return true
    } else if (target < this.value && this.left !== undefined) {
      return this.left.contains(target);
    }
  }
    return false;

};

bstMeths.depthFirstLog = function(cb) { //Time: O(n)
  cb(this.value)
  //recursion: this.left !== undef, this.left.depthFirstLog(cb)
  // do the same thing to the right
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
  
};











