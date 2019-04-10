var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var amount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[amount] = value;
    amount++;
  };

  someInstance.dequeue = function() {
    if (amount > 0) {
      var popItem = storage['0'];
      delete storage['0'];

      for (var i = 1; i < amount; i++) {
        
      }
      amount--;
    }
  };

  someInstance.size = function() {
    return amount;
  };

  return someInstance;
};
