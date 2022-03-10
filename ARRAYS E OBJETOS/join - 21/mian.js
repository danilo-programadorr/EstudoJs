let numeros = [1,2,3,4,5,6,7];

const num = numeros.join();

// console.log(num);


function f () {
  let  resposta = [this.nome, 'esta estudando', this.função].join(' ');
  let  resposta2 = [ 'E Futuramente', this.função2].join(' ');
  console.log(resposta)
  console.log(resposta2)
  
}
let fName = {
  nome: 'Danilo Faro', função: 'javascript vanilla',
   função2: 'React js'
}

f.call(fName);


