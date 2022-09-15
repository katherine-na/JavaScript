// Devuelve la cadena truncada con una terminación ....

const truncateString = (string, number) => {
  let result = "";
  string.length > number 
  ? result =  `${string.slice(0, number)} ...`
  : result = `${string}`
  return result;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
