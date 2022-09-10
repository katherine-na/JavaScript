// Crear un Algoritmo que te convierte de horas a segundos.

const convertHrToSg = (hr) => {
  let seconds = 60;
  let hour = 60 * seconds;
  let result = hr * hour;
  return result;
};

console.log(convertHrToSg(2));
