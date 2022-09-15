// Crear un Algoritmo que te saque le descuento deseado del costo de un producto

const calculateDiscount = (discount, originalPrice) => {
  const discountOff = discount / 100;
  const discountPrice = discountOff * originalPrice;
  const result = originalPrice - discountPrice;
  return result;
};
console.log(calculateDiscount(50, 1000));
