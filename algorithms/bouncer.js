// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Note: NAN !== NAN, so cant compare them 

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered =  arr.filter(function(arrItem) {
    return (arrItem !=false && arrItem !=null && arrItem != 0 && arrItem != "" &&
           arrItem != undefined && arrItem.toString() != "NaN");
  });
  return filtered;
}

bouncer([7, "ate", "", false, NaN]);
