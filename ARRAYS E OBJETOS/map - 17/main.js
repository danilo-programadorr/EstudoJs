const fruteira = ['banana','maçã','kiwi','laranja','pera'];

const fruits = fruteira.map(f => {
  return f.slice(-1)
})
console.log(fruits)  // retornou o ultima letra de cada elemento

const fruits2 = fruteira.map(f => {
  let fruta = f.slice(0) == 'laranja'? true: false ;
  if(fruta === true ){
    return fruta
  }else {
    return 'não contem esta fruta'
  }
})
console.log(fruits2) 

console.log ('===========================================================')

let numbers = [1,2,3,5,6,9,20,25];

const duble = numbers.map(num => {
  let duplicate = num * 2;
  return duplicate;
})

console.log (duble) // duplicando os elementos 

const raiz = numbers.map( Math.sqrt)

console.log (raiz)
console.log ('===========================================================')


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase(); //toUpperCase() passa o elemento  de minuscula para maiuscula
})
console.log(retornoForEach)

console.log ('===========================================================')

const lista = [' lobo ', 'cachorro', 'Teste', 'veronica'];
console.log(lista)
const retornoMap = lista.map((nomeAtual) => {
    console.log(nomeAtual.toString());

    // return nomeAtual.toUpperCase(); // passa o elemento  de maiusculo para minusculo
})
// console.log(retornoMap)