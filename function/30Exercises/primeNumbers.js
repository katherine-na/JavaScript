// Crear un Algoritmo que te diga si un número es primo o no.

const primeNumber = (n) => {
  let message = "";
  if (n % 2 === 1) {
    return (message = `${n} this number is prime`);
  } else {
    return (message = `${n} this number is not prime`);
  }
};

console.log(primeNumber(4));
console.log(primeNumber(13));
console.log(primeNumber(8));
console.log(primeNumber(3));
