// Crear un Algoritmo que te convierte de horas a segundos.

const convertHoursToSecs = (hours) => {
  const seconds = 60;
  const minutes = 60 * seconds;
  const result = hours * minutes;
  return result;
};

console.log(convertHoursToSecs(2));
