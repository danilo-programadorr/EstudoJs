// const lista = ['danilo','hellen','pedro','ingrid'];

// let nomes = lista.forEach((nome) => {
//   console.log(nome.slice(0))
//   if( nome.slice(0) == 'pedro'  ){
//     console.log('nome correto')
//   }
  
// })


// const nums = [1,2,3,4,5,6,7,8,9,12,35,48,44];

// for(let n = 0; n <= nums.length; n++){
//   let parImpar = nums[n];
//   if( nums[n] % 2 == 0 ){
//     console.log(`numero par ${parImpar}`)
//   }else {
//     console.log(`numero impar ${parImpar}`)
//   }
// };


function copy (o) {
  let copy = Object.create(Object.getPrototypeOf(o) )
  let propNames = Object.getOwnPropertyNames(o);
  
  propNames.forEach(nome => {
    let desc = Object.getOwnPropertyDescriptor(o,nome);
    Object.defineProperty(copy,nome,desc);

  })
  return copy;
}

let O1 = {a:1, b:2};
let O2 = copy(O1);

console.log(O1,O2)