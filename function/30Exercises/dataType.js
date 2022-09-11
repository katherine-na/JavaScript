// Crear un Algoritmo que te lea un dato y te diga si es número o letras.

const typeOfData = (x) => typeof x;
array = [
  8,
  "kathy",
  "marilyn",
  { cat: "brandy" },
  function (greeting) {
    console.log(greeting);
  },
  (ravi) => {
    console.log("old man");
  },
  [0, 1, 2, 3, 4, 5],
];
array.forEach((element) => {
  console.log(`typeOfData(${element}) = ${typeOfData(element)}`);
});
