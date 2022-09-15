// Devuelve la cadena truncada con una terminación ....

const truncateString = (string, number) => {
  if (string.length > number) {
    return string.slice(0, number) + "...";
  } else {
    return str;
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
