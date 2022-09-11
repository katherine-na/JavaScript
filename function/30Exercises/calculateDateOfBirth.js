// Crear un Algoritmo que te de tu edad con solo tu año de nacimiento.

const calculateAge = function (yearOfBirth) {
  let fullYear = new Date();
  let currentYear = fullYear.getFullYear();
  let age = currentYear - yearOfBirth;

  let message = `You were born in ${yearOfBirth} you're ${age} years old`;
  return message;
};

console.log(calculateAge(2001));
