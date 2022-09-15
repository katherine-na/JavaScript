// Devolver el numero mayor o el numero menor de un array

const numbers = [4, 8, 2, 3];
let maximum = -Infinity;
let minium = Infinity;
for (let number of numbers) {
  if (number > maximum) maximum = number;
  if (number < minium) minium = number;
}

console.log(minium);
console.log(maximum);
