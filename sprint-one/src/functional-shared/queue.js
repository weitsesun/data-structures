var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.amount = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
};

queueMethods.enqueue = function(value){
	this[this.amount] = value;
	this.amount++
}

queueMethods.dequeue = function(){
	if (this.amount > 0) {
		var temp = this[0];
		for (var i = 0; i < this.amount - 1; i ++){
			this[i] = this[i+1];
		}
		delete this[this.amount - 1];
		this.amount--;
		return temp;
	}
}

queueMethods.size = function(){
	return this.amount;
}