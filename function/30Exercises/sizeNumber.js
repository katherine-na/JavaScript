const sizeNumber = (num1, num2) => {
  if (num1 < num2) {
    return num1 + " is less than " + num2;
  } else if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } else if (num1 === num2) {
    return num1 + " equals " + num2;
  } else if ("" <= "") {
    return "Try again";
  }
};

console.log(sizeNumber(8, 5));
