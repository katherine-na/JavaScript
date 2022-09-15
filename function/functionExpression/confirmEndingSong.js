// Confirmar si una cancion termina con la misma palabra del target
const confirmEndingSong = (songString, target) => {
  const confirmEnding =
    songString.slice(songString.length - target.length) === target;

  if (confirmEnding) {
    return `Is true`;
  } else {
    return `Is false`;
  }
};
console.log(confirmEndingSong("Y la chona se mueve", "mueve"));
console.log(confirmEndingSong("Y la chona se mueve", "muebe"));
