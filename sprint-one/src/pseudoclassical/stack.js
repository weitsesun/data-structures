var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.index = 0;
  this.storage = {};

};

Stack.prototype.size = function() {
	return this.index;
}
Stack.prototype.pop = function() {
	if (this.index > 0) {
	  var popitem = this.storage[this.index - 1];
	  delete this.storage[this.index - 1];
	  this.index --; 
	  return popitem;
	} else {
	  return ;
	}  
}
Stack.prototype.push = function(value) {
	this.storage[this.index] = value;
	this.index++;
}
// Stack.prototype.index = 0;