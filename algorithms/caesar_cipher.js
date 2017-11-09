// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Note ASCII A = 65
// ASCII Z = 90
function rot13(str) { // LBH QVQ VG!
  
  // split to array
  var strArr = str.split("");
  
  // loop to find code, +13, from code
  for(var i=0; i<strArr.length; i++) {
    var code = str.charCodeAt(i);
    if(code >=65 && code <=90) {
      code+= 13;
      if(code > 90) {
        code = code - 26;
      }  
      strArr[i] = String.fromCharCode(code); 
    }
  }
  
  // join
  return strArr.join("");
}

// Change the inputs below to test
rot13("SERR CVMMN!");