const calculateOldPerson = (age) => {
  let message = "";
  if (age < 50) {
    return (message = "You're Young");
  } else {
    return (message = "You're Old");
  }
};

console.log(calculateOldPerson(51));
