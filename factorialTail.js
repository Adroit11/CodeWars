// Factorial tail challenge

// fixme
function zeroes(base, number) {
  let zero = Number.MAX_VALUE;
  let j = base;
  for (let i = 2; i <= base; i++) {
    if (j % i === 0) {
      let p = 0;
      while (j % i === 0) {
        j = j / i;
        p++;
      }
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      zero = Math.min(zero, Math.floor(c / p));
    }
  }
  return zero;
}

let test = zeroes(10, 10);
console.log(test);
