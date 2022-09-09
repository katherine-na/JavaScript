const getAge = function (yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  const message =
    "You were born in " + yearOfBirth + " you are " + age + " years old";
  return message;
};

console.log(getAge(2001, 2022));
