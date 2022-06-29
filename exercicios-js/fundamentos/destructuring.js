const pessoa = {
    nome: 'Erich',
    idade: 21,
    endereco: {
        logradouro: 'Curralinho',
        numero: 123
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)