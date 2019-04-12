

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

Graph.prototype.removeNode = function(node) {
  //remove edges that connected to this node
  while (this.storage[node].length !== 0) {
    this.removeEdge(this.storage[node][0], node);
  }
  
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return true / false
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      return true;
    }
  }

  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //two edges to remove : 1. this.storage[fromNode] 2.this.storage[toNode]
  for(var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      this.storage[fromNode].splice(i, 1);
    }
  }
  for(var i = 0; i < this.storage[toNode].length; i++) {
    if (this.storage[toNode][i] === fromNode) {
      this.storage[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//var whiteboard = Graph();


