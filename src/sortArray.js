function sortme(names){
  return names.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}

console.log(sortme(["ade", "abe", "f", "b"]));