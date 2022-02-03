// let a = 5;
// let b = 9;

// console.log(a < b) // false
// console.log(a >= b) // true
// console.log(b != a) // false

 const formatty = new Intl.NumberFormat(`pt-BR`, {
     style:`currency`, 
     currency:`BRL`
    })

 const preço1 = Number(prompt(`Qual o valor do seu prato 1 ?`))
 const preço2 = Number(prompt(`Qual o valor do seu prato 2 ?`))
 
 
const pedido = [
    {
        mesa: 1,
        nome: `danilo`,
        prato: `galinhada`,
        preço: formatty.format(preço1)
    },

    {
        mesa:2,
        nome:`Hellen`,
        prato: `sushi`,
        preço: formatty.format(preço2)
    }
]
const total = preço1 + preço2;
formatty.format(total)
alert (`o valor total ${formatty.format(total)}`)

alert(`Obrigado por sua estadia`)
console.table(pedido)
