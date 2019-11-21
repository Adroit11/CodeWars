var lastDigit = function(str1, str2) {
  let modulus = (strn1, strn2) => {
    let mod = 0;
    for (let i = 0; i < strn2.length; i++) {
      mod = (mod * 10 + strn2[i] - "0") % strn1;
    }
    return mod;
  };

  let str1_length = str1.length;
  let str2_length = str2.length;
  if (
    str1_length === 1 &&
    str2_length === 1 &&
    str1[0] === "0" &&
    str2[0] === "0"
  )
    return 1;
  if (str2_length === 1 && str2[0] === "0") return 1;
  if (str1_length === 1 && str1[0] === "0") return 0;
  let exponential = modulus(4, str2) === 0 ? 4 : modulus(4, str2);
  return Math.pow(str1[str1_length - 1] - "0", exponential) % 10;
};

console.log(lastDigit("8", "1100081"));
