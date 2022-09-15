// Repetir un string por el numero de veces

const repeatString = (string, number) => {
  const message = `I'm going to repeat:${string.repeat(number)}`;
  return message;
};

console.log(repeatString("Hello ", 6));
