const stringToUpperCase = (str) => {
  let strSplit = str.split("");
  let array = [];

  for (let i = 0; i < strSplit.length; i++) {
    array.push(strSplit[i].toUpperCase());
  }
  return array.join(" ");
};

console.log(stringToUpperCase("hello there"));
