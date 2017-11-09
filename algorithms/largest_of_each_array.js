function sortFun(a, b) {
    return a - b;
}

function largestOfFour(arr) {
  var largerstArr = [];
  for(var i =0; i < 4;i++) {
    largerstArr.push(arr[i].sort(sortFun)[arr[i].length -1]);
  }
  
  return largerstArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);