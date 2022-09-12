//Crear un Algoritmo que  te de el área y volumen de un cilindro dado su radio y altura.

const areaCylinder = (radio, height) => {
  const area = radio * radio + (radio + height);
  return area;
};

console.log(areaCylinder(10, 30));
