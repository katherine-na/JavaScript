const trafficLightGenerator = function (lightColor) {
  let message = "";
  switch (lightColor) {
    case "green":
      message = "Keep going";
      break;

    case "yellow":
      message = "Slow down";
      break;

    case "red":
      message = "Stop";
      break;
  }
  return message;
};

console.log(trafficLightGenerator("green"));
console.log(trafficLightGenerator("yellow"));
console.log(trafficLightGenerator("red"));
