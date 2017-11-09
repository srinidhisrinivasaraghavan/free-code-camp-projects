// the palindrome should ignore non alpha numeric characters
function palindrome(str) {
    // Good luck!
  
    // Convert to lower case
    var lowerCaseStr = str.toLowerCase();
  
    // Remove all non alphanumeric characters
    var pureStr = lowerCaseStr.replace(/[^a-zA-Z\d]/g, "");
    // Reverse
    var reverseStr = pureStr.split("").reverse().join("");

    // Test
    return pureStr === reverseStr;
}



palindrome("Eye##__eetrt05843569384563893%$^&$&^&^74");