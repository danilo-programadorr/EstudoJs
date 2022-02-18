function primoounao (n){
  //verificar número é menor que 1 
  if (n <= 1) return false;
  // verificar é 2 ou 3 
  if(n <= 3) return true;
  // verificar se o número é divisível por 2 ou 3
  if(n % 2 == 0 || n % 3 == 0) return false;
  //verificar o próximo número primo 5 depois +6
  for(let i = 5; i * i <= n; i+=6){
    if(n % i == 0 || n % (i + 2) == 0 ) return false;
  } 
  return true  
};
let primo = primoounao(839)
console.log(primo)
/* 

os primeiros números primos existentes
2, 3, 5, 7, 11, 13, ...

*/