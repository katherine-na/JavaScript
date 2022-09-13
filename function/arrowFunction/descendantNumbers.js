// Crear un Algoritmo que muestre los primeros 100 números de manera descendente.

const descendantNumbers = () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    // console.log(i);
    array.push(i);
  }
  return array.reverse();
};

console.log(descendantNumbers());
