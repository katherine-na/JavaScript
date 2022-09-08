const reverseNumber = function (n) {
  let x = n + "";
  return x.split("").reverse().join("");
};

console.log(reverseNumber(54321));
