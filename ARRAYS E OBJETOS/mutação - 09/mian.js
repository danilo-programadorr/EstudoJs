let pessoas = {
  nome1: 'hellen'
};

let pessoa2 = pessoas

let pessoa3 = {
  nome2: 'hellen'
}

console.log(pessoa2);
console.log(pessoa2 == pessoas);
console.log(pessoa2 == pessoa3);

pessoa2.nome = 'danilo';

console.log(pessoa2);

pessoa2.nome = 'pedro';

console.log(pessoa2);
