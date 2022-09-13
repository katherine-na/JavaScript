// Crear un Algoritmo que te saque le descuento deseado del costo de un producto

const calculateOff = (discount, originalPrice) => {
  const discountOff = discount / 100;
  let discountPrice = discountOff * originalPrice;
  let result = originalPrice - discountPrice;
  return result;
};

console.log(calculateOff(50, 1000));
