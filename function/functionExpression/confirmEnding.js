// Revisar si el string y el target string son iguales
const confirmEnding = function (string, target) {
  const lengthString = string.length;
  const lengthTarget = target.length;
  const substring = string.slice(lengthString - lengthTarget);
  // without ternary operator

  substring === target
    ? console.log(`${string} ends with ${target}`)
    : console.log(`${string} doesn't end with ${target}`);

  // with ternary operator
};

console.log(confirmEnding("marilyn90", "90909"));
console.log(confirmEnding("Good morning!", "morning!"));

//short form

const confirmEnding2 = (str, target) =>
  str.slice(str.length - target.length) === target;

console.log(confirmEnding2("Good afternoon!", "afternoon!"));
console.log(confirmEnding2("Good aternoon", "night"));
