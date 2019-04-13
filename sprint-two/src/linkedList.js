//add to tail input: value   output: 
//need to find the last node
//if list is empty, insert the node to the head

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list = {'head' : null, 'tail' : null}
  list.addToTail = function(value) { //Time: O(1)
    //if Linkedlist is empty -> insert to the head
    var newNode = Node(value);
    if (list.head === null) { 
      list.head = newNode;
      list.tail = newNode;
    } else { 
      list.tail.next = newNode;
      list.tail = newNode;
    }  
  };

  list.removeHead = function() { //Time: O(1)
    //1. removing what the list.head points to
    //2. change head to point to the next node
    //edge case: empty list 2. only one node, should update head and tail to null
    
    if (list.head !== null) { 
      // if only 1 node:
      var headValue = list.head.value;
      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } 
      // more than 1 node
        else { 
        list.head = list.head.next; 
      } 
      return headValue; 
    } 
  };

  list.contains = function(target) { //Time: O(n)
    //iterate through the nodes and check if a node == the target
    //edgecase: empty list. will reutn false directly
    if (list.head === null) {
      return false;
    } else {
      var currentNode = list.head;
      var found = false;
      //when to leave while loop : 
        //1. we found the target 
        //2. we have gone through the list and not found
      while (!found && currentNode !== null) { //null.next
        found = currentNode.value === target;
        // solution 1
        // if (currentNode.next === null) { //null.next
        //   return found;
        // }
        currentNode = currentNode.next;
        
      }
      return found;
    }
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
