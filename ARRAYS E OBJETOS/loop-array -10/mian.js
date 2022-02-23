// let nomes = ['danilo','hellen','pedro','mae'];

// for(let i = 0; i <= nomes.length; i++){
//   if (nomes[i] == 'danilo'){
//     console.log('olá danilo')
//   }
// };

let numeros = [1,2,7,5,8,10,6,9];

let arrIlter = numeros.filter((elem,index,arr) => arr.indexOf(elem) === index && elem % 2 == 0) 

console.log(arrIlter) // numeros pares



