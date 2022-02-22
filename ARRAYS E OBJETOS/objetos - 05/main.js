let casa = {
  cor: 'branca',
  morador: 'hellen', 
  sauda: function (){
    console.log('ola' , casa.morador , 'como vai')
  }
}
console.log( ` a ${casa.morador} mora na casa  ${casa.cor}`);
casa.sauda();


