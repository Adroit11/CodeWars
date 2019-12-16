//Squareroot or not
function squareOrSquareRoot(array) {
  let newArr = [];
  let newVal;
  for (let i = 0; i < array.length; i++) {
    newVal =
      Math.sqrt(array[i]) % 1 === 0 ? Math.sqrt(array[i]) : array[i] * array[i];
    newArr.push(newVal);
  }
  return newArr;
}

let test = squareOrSquareRoot([2, 5, 6, 2, 9, 0, -4]);
console.log(test);
