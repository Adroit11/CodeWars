/* 
Complete the solution so that the function 
will break up camel casing, using a space 
between words.
*/

// complete the function
function solution(string) {
  let letters = string.split("");
  let res = [];
  letters.forEach((letter, index) => {
    if (letter === letters[index].toUpperCase()) {
      res += " ";
    }
    res += letter;
  });
  return res;
}

let test = solution("camelCasing");
console.log(test);
