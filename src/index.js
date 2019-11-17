function queueTime(customers, n) {
  let total = 0;
  let till = customers.length > n ? customers.slice(n) : customers.slice(0, n);
  if (customers.length > 0 && customers.length > n) {
    let customerQueue =
      n !== 1
        ? till.reduce((val, num, index) => {
            customerQueue[index] += num;
            return customerQueue;
          })
        : customers;
    total = customerQueue.reduce((val, num) => {
      return val + num;
    });
  } else {
    total = 0;
  }

  return total;
}

// Best Solution
/*
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
*/

let test = queueTime([1, 2], 1);
console.log(test);
