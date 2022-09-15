// Revisar si el string y el target string son iguales
const confirmEnding = function (string, target) {
  const lengthString = string.length;
  const lengthTarget = target.length;
  const result = string.slice(lengthString - lengthTarget) === target;
  return result;
};
console.log(confirmEnding("Good morning!", "morning!"));
console.log(confirmEnding("Good morning!", "morning"));

// Short form
const confirmEnding2 = (str, target) =>
  str.slice(str.length - target.length) === target;

console.log(confirmEnding2("Good afternoon!", "afternoon!"));
console.log(confirmEnding2("Good aternoon", "night"));
