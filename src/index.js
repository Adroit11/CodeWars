function sumOfDifferences(arr) {
  if (arr === null) return;
  arr.sort(function(a, b) {
    return a - b;
  });
  let sumArray = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    sumArray += arr[i] - arr[i - 1];
  }
  return sumArray;
}

let test = sumOfDifferences([2, 1, 10]);
console.log(test);

/* Best solutions that passed */
/*

function sumOfDifferences(arr) {
  return arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
 }
 
 */
