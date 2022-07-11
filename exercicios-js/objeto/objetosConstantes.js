// pessoa -> 123 -> {...}
const pessoa = { nome: "erich" }
pessoa.nome = 'Erich'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Claudia'} // causa erro pois é uma constante

// com esse comando não tem como mudar nada no objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = "Rua abc"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'Joao'
console.log(pessoaConstante)