let carro = {
  marca: 'wv',
  portas: 4,
  eletric: false,
  motor: 1.0
}

console.log(carro.motor)
carro.motor = 1.6;
console.log(carro.motor)
carro.tetoSolar = 'tetoSolar'
console.log(carro.tetoSolar)
delete carro.tetoSolar
console.log(carro.tetoSolar)