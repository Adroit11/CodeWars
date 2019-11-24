const names =
  "asdfnhdkjashkjfhidjashudijshfjhdujdshjsdhjfhjkdfhsgsjdfghjsggdfgkklhjfdfghjkgfdfgjkhhdffghfg";
const nameArray = names.split("");
var len = nameArray.length;
console.time();
while (len--) {
  console.log(nameArray[len]);
}
console.timeEnd();
