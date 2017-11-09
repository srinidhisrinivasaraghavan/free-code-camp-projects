function repeatStringNumTimes(str, num) {
  if(num < 1) {
    return "";
  }
  
  var repeatedStr = "";
  for(var i = 0 ;i < num; i++) {
    repeatedStr +=str;
  }

  return repeatedStr;
}

repeatStringNumTimes("abc", 3);