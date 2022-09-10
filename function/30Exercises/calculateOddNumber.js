// Crear un Algoritmo que te diga si un número es par.

const oddNumber = (n) => {
  let message = "";
  if (n % 2 === 0) {
    return (message = `${n} this number is even`);
  } else {
    return (message = `${n} this number is odd`);
  }
};

console.log(oddNumber(4));
console.log(oddNumber(9));
