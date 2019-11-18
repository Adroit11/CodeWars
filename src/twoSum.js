function twoSum(numbers, target) {
  let indexes = {};
  numbers.forEach((val, index) => (indexes[val] = index));
  for (let i = 0; i < numbers.length; i++) {
    if (indexes[target - numbers[i]]) {
      // return the index as an array
      return [indexes[target - numbers[i]], i];
    }
  }
}

let test = twoSum([1, 2, 3], 5);
console.log(test);
