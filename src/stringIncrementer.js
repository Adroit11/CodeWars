/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string. 
*/
function incrementString(strng) {
  let lastChar = strng.charAt(strng.length - 1);
  let lastCharInt = parseInt(lastChar, 10);
  return isNaN(lastCharInt)
    ? strng + 1
    : strng.slice(0, -1) + (lastCharInt + 1);

  // return incrementedString
}

let test = incrementString("foobar000");
console.log(test);
