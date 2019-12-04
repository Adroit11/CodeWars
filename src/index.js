//RGB To Hex Conversion

function rgb(r, g, b) {
  // complete this function
  let hexR =
    r < 0 ? "0" : r > 255 ? Number(255).toString(16) : Number(r).toString(16);
  let hexG =
    g < 0 ? "0" : g > 255 ? Number(255).toString(16) : Number(g).toString(16);
  let hexB =
    b < 0 ? "0" : b > 255 ? Number(255).toString(16) : Number(b).toString(16);
  if (hexR.length < 2) {
    hexR = "0" + hexR;
  }
  if (hexG.length < 2) {
    hexG = "0" + hexG;
  }
  if (hexB.length < 2) {
    hexB = "0" + hexB;
  }
  return hexR.concat(hexG, hexB).toUpperCase();
}

let test = rgb(253, 300, -20);
console.log(test);
