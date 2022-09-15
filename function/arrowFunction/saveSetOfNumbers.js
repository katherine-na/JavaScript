// Crear un Algoritmo que te guarde un conjunto de números.

const saveSetOfNumbers = (a, b) => {
  let array = [];
  for (let i = a; i < b; i++) {
    array.push(i);
  }
  return array;
};

console.log(saveSetOfNumbers(2, 7));
