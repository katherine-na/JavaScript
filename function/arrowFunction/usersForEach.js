// Devolver mensaje usando map

const users = [
  { name: "Claudia", age: "43", ocupation: "house wife" },
  { name: "Liz", age: 27, ocupation: "studient" },
  { name: "Jose", age: 52, ocupation: "bus driver" },
];
const userMessage = (user, index) => {
  const message = ` ${index}: ${user.name} is ${user.age} and her ocupation is ${user.ocupation}`;
  return message;
};

const usersInformation = users.map(userMessage);

console.log(usersInformation);
