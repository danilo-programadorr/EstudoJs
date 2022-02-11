function recursão (d) {
  if (d + 10  < 2 ) {
    console.log('recurção parou');
  }else if (d % 2 != 0 ){
    console.log('Numero impar ' + d);
    recursão(d - 1);
  }else {
    console.log('Numero par ' + d);
    recursão(d - 3);
  }
};

// recursão(41);
// recursão(33);
recursão(10);