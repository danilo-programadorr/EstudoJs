// function imprimiNoConsole (){
//   console.log(`hello world`);
// }
// imprimiNoConsole()

// let n = 10; // escopo global

/* const numeroSomar = (a,b) => {





  let idade = 19;  //escopo da funçao
  let cnh = true;

  if (idade >= 18 && cnh == true){
    console.log(`idade:`,idade,`cnh:`,cnh);
  };

  return a*b /2;  
};
let result = numeroSomar(10,3);
console.log(`o N vale: `,n);
console.log( `o resultado de a * b /2 = `,result) */


const soma = (a,b) => {
  return a * b;
} 
const result = soma(2,4.3);

if (result == 10 ) {
  console.log('parabens voçê pegou nota máxima')
  console.log(`sua nota é ${ result }`)
}else if (result > 12 ) {
  console.log(`você superou a nota maxima`)
  console.log(`sua nota é ${ result }`)
}else{
  console.log('sua nota esta abaixo para os requisitos')
  console.log(`sua nota é ${ result }`)
};


