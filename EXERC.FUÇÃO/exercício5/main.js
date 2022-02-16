
function verTipo (dado) {
  if (typeof dado === 'number'){
    console.log(`este dado é um ${typeof dado} `)
  }else if (typeof dado === 'string'){
    console.log(`este dado é um ${typeof dado} `)
  }else{
    console.log(`este dado é um ${typeof dado} `)
  }
}
verTipo(false)
verTipo(10)
verTipo('teste')
