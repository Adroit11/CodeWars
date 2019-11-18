function solve(str) {
  let string = str.split("");
  //reverse and join letters back
  return string.reverse().join("");
}

let test = solve("our code");
console.log(test);
