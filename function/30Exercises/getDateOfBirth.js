const getAge = function (yearOfBirth) {
  let fullYear = new Date();
  let currentYear = fullYear.getFullYear();
  let age = currentYear - yearOfBirth;

  let message = `You were born in ${yearOfBirth} you're ${age} years old`;
  return message;
};

console.log(getAge(2001));
