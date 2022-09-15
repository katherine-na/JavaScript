// Devolver un string por orden alfabetico

function alphabetOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphabetOrder("webmaster"));
