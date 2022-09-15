// Devolver numeros ordenados al reves

const reverseNumber = function (n) {
  let x = n.toString(); // n + '' xxxxxxNOxxxxx use toString()
  console.log(x);
  return x.split("").reverse().join("");
};

console.log(reverseNumber(54321));

const string = "k-a*t y";

console.log(string.split("")); // ["k", "a", "t", "y"]
console.log(string.split(" ")); // ["kat", "y"]
console.log(string.split("-")); // ["k", "aty"]
console.log(string.split("*")); // ["ka", "ty"]
