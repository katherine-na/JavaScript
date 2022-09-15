function factorialize(num) {
  let number = 1;
  for (let i = 2; i <= num; i++) {
    number *= i;
  }
  return number;
}

console.log(factorialize(5));
