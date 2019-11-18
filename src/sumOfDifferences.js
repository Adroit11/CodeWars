function sumOfDifferences(arr) {
  if (arr === null) return;
  let sumArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sumArray = arr[i] - arr[i + 1];
  }
  return sumArray;
}

let test = sumOfDifferences([2, 1, 10]);
console.log(test);
