// function lembraSoma (x) {
//   return function (z){
//     return x * z;
//   }

// }

// let soma1 = lembraSoma(5);

// console.log(soma1(5));

function contador (a) {
  let cont = a;
  const somacontador = function () {
    console.log(cont)
    cont++
  }
  return somacontador;    // sempre tem que retonar uma função quando
                          // o closure for usado
};

let contando = contador(5);
contando();
contando();
contando();
contando();
contando();
contando();