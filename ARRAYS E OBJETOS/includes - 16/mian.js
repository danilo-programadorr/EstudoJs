const fruteira = ['banana','maçã','kiwi','laranja','pera'];

const  acharPera = fruteira.includes('laranja');
console.log(acharPera)
if (acharPera === true ) {
  console.log('Pera encontrada')
}else {
  console.log('não temos esta fruta')
  console.log(`minha fruteira`,'',fruteira)
}

// Este método permite conferir se uma string contém um determinado conjunto de caracteres. 