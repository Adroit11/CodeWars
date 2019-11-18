function sumOfDifferences(arr) {
  let sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    sumArray += arr[i] - arr[i + 1];
  }
  return sumArray;
}

let test = sumOfDifferences([2, 1, 10]);
console.log(test);
