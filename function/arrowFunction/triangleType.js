// Crear un Algoritmo que te identifique el tipo de triángulo conociendo sus 3 lados.

const triangleType = (a, b, c) => {
  let message = ``;
  if (a === b && a === c) {
    return (message = "Your triangle is Equilateral");
  } else if (a != c && b) {
    return (message = "Your triangle is Isosceles");
  } else if (a != b && a != c) {
    return (message = "Your triangle is Scalene");
  }
};

console.log(triangleType(10, 10, 30));
