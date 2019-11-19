/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/
function high(x) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const sentence = x.split(" ");
  let highestScore = 0;
  let highestScoreWordIndex = 0;
  let scoreStack = sentence.map(score => {
    let aplhabetBank = score.split("");
    return aplhabetBank.reduce(
      (lastScore, inWord) => lastScore + alphabets.indexOf(inWord),
      0
    );
  });
  scoreStack.forEach((value, index) => {
    if (value > highestScore) {
      highestScore = value;
      highestScoreWordIndex = index;
      console.log(highestScoreWordIndex);
    }
  });
  return sentence[highestScoreWordIndex];
  //console.log(highestScoreWordIndex);
}

let test = high("man i need a taxi up to ubud");
console.log(test);
