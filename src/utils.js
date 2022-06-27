function RGBToHex(r, g, b) {
  const rHex = Math.round(r).toString(16).padStart(2, '0');
  const gHex = Math.round(g).toString(16).padStart(2, '0');
  const bHex = Math.round(b).toString(16).padStart(2, '0');
  return `#${rHex}${gHex}${bHex}`;
}

function mixHexColours(...args) {
  let r = 0;
  let g = 0;
  let b = 0;
  for (const argument of args) {
    r += Number.parseInt(argument.slice(1, 3), 16) ** 2;
    g += Number.parseInt(argument.slice(3, 5), 16) ** 2;
    b += Number.parseInt(argument.slice(5, 7), 16) ** 2;
  }
  return RGBToHex(
    Math.sqrt(r / arguments.length),
    Math.sqrt(g / arguments.length),
    Math.sqrt(b / arguments.length)
  );
}

function getHCF(x, y) {
  // find highest common factor of two numbers
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

module.exports = {
  RGBToHex,
  mixHexColours,
  getHCF
};
