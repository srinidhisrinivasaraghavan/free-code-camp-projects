function chunkArrayInGroups(arr, size) {
  // Break it up.
  var resultArr = [];
  var resultArLength = Math.ceil(arr.length / size);
  
  for(var i=0, j =0; i< resultArLength; i++, j +=size) {
   resultArr.push(arr.slice(j, j+size));
  }
  return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);