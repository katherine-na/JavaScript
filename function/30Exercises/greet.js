const greetMessage = (time, name) => {
  if (time <= 7) {
    return "Good Morning " + `${name}`;
  } else if (time <= 17) {
    return "Good afternoon" + `${name}`;
  } else if (time <= 22) {
    return "Good Night " + `${name}`;
  }
};

console.log(greetMessage(19, "Marilyn"));
