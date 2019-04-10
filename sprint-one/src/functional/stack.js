var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index += 1;
  };

  someInstance.pop = function() {
    if (index > 0) {
      var popitem = storage[index - 1];
      delete storage[index - 1];
      index --; 
      return popitem;
    } else {
      return ;
    }  
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
