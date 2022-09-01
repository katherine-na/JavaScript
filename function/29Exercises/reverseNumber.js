function reverseNumber(x) {
  x = x + "";
  return x.split("").reverse().join("");
}

console.log(Number(reverseNumber(12345)));
