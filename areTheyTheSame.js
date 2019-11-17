let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
let array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
function comp(array1, array2) {
  let mult = [];
  if (array1 != null && array2 != null) {
    array1.forEach((val, index) => mult.push(val * val));
    return (
      mult.length === array2.length &&
      mult.sort().every((value, index) => value === array2.sort()[index])
    );
  } else {
    return false;
  }
}
let output = comp(array1, array2);
console.log(output);
