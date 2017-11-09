// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function sortFunc(a, b) {
  return a -b;
}
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // sort
  arr.sort(sortFunc);

  // loop and find index
  for(var i =0; i<arr.length; i++) {
    if(arr[i] >= num) {
      return i;
    }
  }
  
  return arr.length;
}

(getIndexToIns([10, 20, 30, 40, 50], 35);