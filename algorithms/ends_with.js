// str.subStr(startIndex, length) returns the substring for the length starting from startIndex of the string 

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var subStr = str.substr(str.length - targetLength ,targetLength);
  return subStr === target;
}

confirmEnding("Bastian", "n");

