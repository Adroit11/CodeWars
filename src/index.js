function sumOfDifferences(arr) {
  if (arr === null) return;
  arr = arr.sort(function(a, b) {
    return b - a;
  });
  let sumArray = [];
  arr.forEach((val, index) => {
    sumArray += val;
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      return (sumArray += arr[i] - arr[j] + (arr[j] - 1));
    }
  }
}

let test = sumOfDifferences([2, 1, 10]);
console.log(test);
