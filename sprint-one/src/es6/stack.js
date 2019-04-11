class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(index, storage) {
  	this.index = 0;
  	this.storage= {};
	}

	size() {
		return this.index;
	}
	pop() {
		if (this.index > 0) {
		  	var popitem = this.storage[this.index - 1];
		  	delete this.storage[this.index - 1];
		  	this.index --; 
		  	return popitem;
		} else {
	  		return ;
		}  
	}

	push(value) {
		this.storage[this.index] = value;
		this.index++;
	}
}