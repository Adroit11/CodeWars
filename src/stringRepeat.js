// String repeat
function repeatStr(n, s) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}

let test = repeatStr(5, "Ade");
console.log(test);
