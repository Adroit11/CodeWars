function queueTime(customers, n) {
  let total = 0;
  let startpoint = n-1;
  let customerQueue = (n !== 1)? customers.filter((value, index) => startpoint !== index): customers;
  total = customerQueue.reduce((val, num) => {
    return val + num;
  });
  return total;
}

let test = queueTime([5,3,4], 1);
console.log(test);