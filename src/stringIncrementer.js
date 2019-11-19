/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string. 
*/
function incrementString(strng) {
  if (isNaN(strng.slice(-1))) {
    return `${strng}1`;
  } else {
    let chars = strng
      .split("")
      .filter(n => isNaN(n))
      .join("");
    let nums = strng
      .split("")
      .filter(n => !isNaN(n))
      .join("");
    let incrementedNumber = +nums + 1;
    if (nums.length > incrementedNumber.toString().length) {
      var zeros = "";
      for (var i = 0; i < nums.length; i++) {
        zeros += "0";
      }
      return chars + (zeros + incrementedNumber).slice(-nums.length);
    } else {
      return chars + incrementedNumber;
    }
  }
  // return incrementedString
}

let test = incrementString("foobar");
console.log(test);
