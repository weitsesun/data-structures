var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.amount = 0;
  this.storage = {};

};
Queue.prototype.enqueue = function(value){
	this.storage[this.amount] = value;
	this.amount++
}

Queue.prototype.dequeue = function(){
	if (this.amount > 0) {
		var temp = this.storage[0];
		for (var i = 0; i < this.amount - 1; i ++){
			this.storage[i] = this.storage[i+1];
		}
		delete this.storage[this.amount - 1];
		this.amount--;
		return temp;
	}
}

Queue.prototype.size = function(){
	return this.amount;
}
