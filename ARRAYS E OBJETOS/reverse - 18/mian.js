let carros = ['wv','wv','audi','cruiser','fiat','fiat'];

let filterRepite = carros.filter( (elem, index, arr) => arr.indexOf(elem) === index);
console.log(filterRepite)
// primeiro modo
console.log ('===========================================================')

let removeRepite = new Set(carros);

removeRepite.forEach((value) => {
  let vendidoOuNao = value.includes('wv') 
  let = result = vendidoOuNao === true ? 'no estoque': ' foi vendido';
  console.log(result)
})
// segundo modo 