let idade = 17;
let  habilitação = true;

if (idade >= 18 && habilitação === false){
  console.log(`Não atende a todos os requisitos, não Habilitado`)
}else if (idade >= 18 && habilitação === true){
  console.log(`Você atende aos requisitos para dirigir`)
}else{
  console.log(`Você é menor de idade e não possue Habilitação`)
}
