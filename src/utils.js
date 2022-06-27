
function RGBToHex(r, g, b) {
  // convert rgb to hex
  r = Math.round(r).toString(16); // convert to hex
  g = Math.round(g).toString(16); 
  b = Math.round(b).toString(16);
  if (r.length == 1) r = "0" + r; // add leading zero if needed
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  return "#" + r + g + b; // concatenate and return hex string
}

function mixHexColours(...args) {
  // mix colours using square method 
  let r = 0; // init variables
  let g = 0;
  let b = 0;
  for (const argument of args) { // loop through arguments
    r += Number.parseInt(argument.slice(1, 3), 16) ** 2; // add rgb values squared
    g += Number.parseInt(argument.slice(3, 5), 16) ** 2;
    b += Number.parseInt(argument.slice(5, 7), 16) ** 2;
  }
  return RGBToHex( // convert to hex
    Math.sqrt(r / arguments.length),
    Math.sqrt(g / arguments.length),
    Math.sqrt(b / arguments.length)
  );
}

function getHCF(x, y) {
  // find highest common factor of two numbers
  let z = 0; // init variable
  // using euclidean algorithm
  while (y !== 0) { // loop until y is 0
    z = y;
    y = x % y;
    x = z;
  }
  return x;
}

module.exports = {
  RGBToHex,
  mixHexColours,
  getHCF
};
