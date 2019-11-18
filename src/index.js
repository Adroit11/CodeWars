function solve(str) {
  let string = str
    .split(" ")
    .join("")
    .split("");
  let words = str.split(" ");
  // Get the length of each words in the array
  let eachWordLength = [];
  for (let i = 0; i < words.length; i++) {
    eachWordLength.push(words[i].length);
  }
  // Reverse the input string
  let reverseString = string.reverse();
  let newWords = [];
  for (let i = 0; i < reverseString.length; i++) {
    newWords += reverseString[i];
  }

  return newWords;
}

let test = solve("your code rocks");
console.log(test);
