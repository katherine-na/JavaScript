const myParty = function (age) {
  if (age < 21) {
    return "Sorry, you can't come to my party";
  } else if (age > 21) {
    return "You can come to my party!";
  }
};

console.log(myParty(18));
