let carro = {
  marca: 'wv',
  portas: 4,
  portamalas: '200l',
  motor: 1.6
}

let extra = {
  arCondicionado: true,
  tetosolar: true
}

 console.log(carro); // antes da propriedade assign

 Object.assign(carro , extra); 

 console.log(carro); //depois da propriedade assign 

 //a propriedade assign copia as propriedades de um objeto para o principal 
 // para implementar novas propriedades já existente em outro objeto 