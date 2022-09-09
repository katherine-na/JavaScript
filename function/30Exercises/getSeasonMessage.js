const getSeasonMessage = function (season) {
  let message = "";
  switch (season) {
    case "spring":
      message = "Welcolme Spring Season";
      break;

    case "summer":
      message = "Welcolme Summer Season";
      break;

    case "autumn":
      message = "Welcolme Autumn Season";
      break;

    case "winter":
      message = "Welcolme Winter Season";
      break;

    default:
      message = "Try again!";
      break;
  }
  return message;
};

console.log(getSeasonMessage("hola"));
