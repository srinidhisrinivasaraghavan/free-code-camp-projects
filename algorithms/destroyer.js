function destroyer(arr) {
  var argumentsArr = Array.prototype.slice.call(arguments);
  // Remove all the values
   argumentsArr = argumentsArr.slice(1);

  arr = arr.filter(function(arrItem) {
    return argumentsArr.indexOf(arrItem) < 0;
  });
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);