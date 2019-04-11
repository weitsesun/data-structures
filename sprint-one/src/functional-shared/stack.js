var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.index = 0;
  _.extend(obj, stackMethods);
  return obj;
};


var stackMethods = {};
stackMethods.push = function(value){
	this[this.index] = value;
	this.index += 1;
};
stackMethods.pop = function(obj) {
	if (this.index > 0) {
      var popitem = this[this.index - 1];
      delete this[this.index - 1];
      this.index --; 
      return popitem;
    } else {
      return;
    }
};
stackMethods.size = function() {
	return this.index;
}


