const keyAndValue = [
  { clave: 1, valor: 10 },
  { clave: 2, valor: 20 },
  { clave: 3, valor: 30 },
];
[{ 1: 10 }, { 2: 20 }, { 3: 30 }];

const reformattedObj = keyAndValue.map((obj) => {
  let newObject = {};
  newObject[obj.clave] = obj.valor;
  return newObject;
});
console.log(reformattedObj);
