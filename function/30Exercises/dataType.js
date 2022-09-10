// Crear un Algoritmo que te lea un dato y te diga si es número o letras.

const dataType = (x) => {
  let message = "";
  if (x < 100) {
    return (message = "This is a number");
  } else {
    return (message = "This is a string");
  }
};

console.log(dataType(6));
console.log(dataType("kathy"));
