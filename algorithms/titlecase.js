// only the 1st letter should be caps, rest should be small

function titleCase(str) {
  var strArr = str.split(" ");

  for(var i=0;i<strArr.length; i++) {
    var wordArr = strArr[i].split("");
    var firstLetter = wordArr[0].toUpperCase();
    wordArr[0] = "";
    strArr[i] = firstLetter + wordArr.join("").toLowerCase();
  }
  
  return strArr.join(" ");
}

titleCase("sHoRt AnD sToUt");