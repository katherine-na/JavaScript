// Devuelve la cadena truncada con una terminación ....

const myCats = ["Mishuga", "Brandy", "Kevin", "Timon"];

const truncateMyCats = (number) => {
  if (myCats.length > number) {
    return myCats.slice(0, number) + "...";
  } else {
    return structuredClone;
  }
};
console.log(truncateMyCats(2));
