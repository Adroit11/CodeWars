function sortme(names){
  return names.sort(function(a, b) {
    return a - b;
  });
}

console.log(sortme(["ade", "abe", "f", "b"]));