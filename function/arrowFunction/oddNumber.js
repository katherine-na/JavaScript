const oddNumbers = (a, b) => {
  let arr = [];
  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(oddNumbers(2, 15));
