function getRandom (min, max) {
  min = Math.ceil(min); // arrdonta sempre para baixo 
  max = Math.floor(max); // arrdonta sempre para cima / caso valor negativo arredonda pra cima
  return Math.floor(Math.random() * (100 - 1 )) + 1 
};
let numero = getRandom();
console.log(numero);