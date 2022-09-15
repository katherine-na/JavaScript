// Carcular edad en el 2050 usando 'new Date'

const calculateAge2050 = (age) => {
  let date = new Date();
  let currentYear = date.getFullYear();
  let result = 2050 - currentYear + age;
  return result;
};

console.log(calculateAge2050(21));
