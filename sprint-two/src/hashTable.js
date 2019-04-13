

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) { //already stored some k:v in this store[index]
    var found = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      var subArr = this._storage[index][i];
      if (subArr[0] === k) {
        subArr[1] = v;
        found = true;
      }
    }
    if (!found) {
      this._storage[index].push([k, v]);
    }
  } else {
    this._storage[index] = [[k, v]];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {

    for (var i = 0; i < this._storage[index].length; i++) {
      var subArr = this._storage[index][i];
      if (subArr !== undefined) {
        if (subArr[0] === k) {
          return subArr[1];
        }
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if(this._storage[index][i][0] === k)
  //     this._storage[index][i] = undefined;
  // }

  //Wayne's version: decrease the size of the array while remove something from it
  var subArray = this._storage[index];
  if (subArray) {
    var testCount = subArray.length;
    var i = 0;
    while(i < testCount) {
      if(subArray[i][0] === k){
        subArray = subArray.splice(i, 1);
        i++;
      }
      i++;
    }
  }
}; 



/*
 * Complexity: What is the time complexity of the above functions?
 */


