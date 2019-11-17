function queueTime(customers, n) {
  let total = 0;
  let startpoint = n - 1;
  let customerQueue =
    n !== 1
      ? customers.filter((value, index) => startpoint !== index)
      : customers;
  total =
    customerQueue.length > 0
      ? customerQueue.reduce((val, num) => {
          return val + num;
        })
      : 0;
  return total;
}

let test = queueTime([], 3);
console.log(test);
