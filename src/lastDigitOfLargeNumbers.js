var lastDigit = function(str1, str2) {
  //let powNumber = Math.pow(str1, str2);
  let numArray = str1.toString().split("");
  let total = 1;
  numArray.forEach(value => (total = total * parseInt(value, 10)));
  return total;
};

console.log(lastDigit(4, 4));
