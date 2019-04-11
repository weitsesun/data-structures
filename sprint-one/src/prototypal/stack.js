var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.index = 0;
  return obj;
};
//var index = 0;
var stackMethods = {};
stackMethods.size = function() {
	return this.index;
}
stackMethods.pop = function() {
	if (this.index > 0) {
	  var popitem = this[this.index - 1];
	  delete this[this.index - 1];
	  this.index --; 
	  return popitem;
	} else {
	  return ;
	}  
}
stackMethods.push = function(value) {
	this[this.index] = value;
	this.index++;
}

