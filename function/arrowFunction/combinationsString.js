// Devolver un String al reves

const reverseString = (str) => {
  const reverse = str.split("").reverse().join("");

  return reverse;
};
console.log(reverseString("JavaScript"));
