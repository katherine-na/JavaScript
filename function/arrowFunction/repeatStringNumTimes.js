// Repetir un string por el numero de veces sin usar .repeat()

const repeatStringNumTimes = (string, number) => {
  let accumulatedStr = "";

  for (let i = 0; i < number; i++) {
    accumulatedStr += string;
  }

  return accumulatedStr;
};

console.log(repeatStringNumTimes("Hi ", 8));
