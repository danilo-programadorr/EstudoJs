/*********** EXEMPLO 1 **************/ 

function funcPotencia (b,p) {
  return Math.pow(b,p); 
};
console.log(funcPotencia(3,5));
console.log(funcPotencia(2,4));
console.log(funcPotencia(3,2));


/*********** EXEMPLO 2, SEM A FUNÇÃO MATH.POW! **************/ 

function funcPotencia2 (a,b) {
  // let potencia = a ** b
  // console.log(potencia);
  // return potencia;   OU
  return a ** b;
};
console.log(funcPotencia2(4,2));
console.log(funcPotencia2(3,3));
console.log(funcPotencia2(1,2));
  
