const velocidadeMaxima = 80;
let  velocidadeVeiculo = 75;

if (velocidadeVeiculo > velocidadeMaxima){
  console.log(`você foi multado por exesso de velocidade, seu veiculo estava à ${velocidadeVeiculo}Km/h`)
}else if (velocidadeVeiculo == velocidadeMaxima){
  console.log(`você atingiu a velocidade máxima de ${velocidadeVeiculo}Km/h`)
}else{
  console.log(`você está abaixo da velocidade de ${velocidadeMaxima}Km/h`)
}
