const oddNumbers = function (a, b) {
  let arr = [];
  for (let i = a; b % 2; i++) {
    if (a < b) {
      arr.push(i);
      return arr;
    }
  }
};

console.log(oddNumbers(10, 15));
