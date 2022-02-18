// EXEMPLO 1

function abs (x) {
  return Math.abs(x)
};

console.log(abs(null));
console.log(abs(-5));
console.log(abs(""));

// EXEMPLO 2

function numPositivo (numNegativo) {
  if (numNegativo > 0 || numNegativo == 0 || numNegativo < 0 ){
    return Math.abs(numNegativo)
  }
}
console.log(numPositivo(''));
console.log(numPositivo(-2));
console.log(numPositivo([]));
