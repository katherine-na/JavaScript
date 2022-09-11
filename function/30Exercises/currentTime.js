// Retornar la hora
// son las 00:00 hr:mn

const currentTime = () => {
  let time = new Date();
  let hr = time.getHours();
  let mn = time.getMinutes();
  let prefix = "";
  if (hr < 12) {
    prefix = "am";
  } else {
    prefix = "pm";
  }

  let timeString = `Son las ${hr}:${mn}${prefix}`;

  return timeString;
};

console.log(currentTime());
