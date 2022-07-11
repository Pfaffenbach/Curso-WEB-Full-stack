const nome = 'Erich'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Deixa um testo todo maiúsculo
console.log(`Ei... ${up('cuidado')}!`)