const season = function (month) {
  for (let i = 0; i < month; i++) {
    if (i < month) {
      return "Its Christmas";
    } else {
      return "It's not christmas yet";
    }
  }
};

console.log(season(10));
