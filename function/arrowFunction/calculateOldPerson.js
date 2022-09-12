// Crear un Algoritmo que te diga si una persona es mayor de edad.

const calculateOldPerson = (age) => {
  let message = "";
  if (age < 50) {
    return (message = "You're Young");
  } else {
    return (message = "You're Old");
  }
};

console.log(calculateOldPerson(51));
