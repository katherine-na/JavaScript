// Devolver mensage por cada elemento de un array con map

const numbers = [1, 2, 3, 4, 5];
const countNumbers = (number) => {
  const message = `This is a ${number}`;
  return message;
};

const numberMessage = numbers.map(countNumbers);
console.log(numberMessage);
