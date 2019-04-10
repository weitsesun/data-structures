var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.amount = 0;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {
};

queueMethods.enqueue = function(){}
queueMethods.dequeue = function(){}
queueMethods.size = function(){
	return this.amount;
}