// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaaaa' // contexto lexico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Erich',
    idade: 21,
    peso: 80,
    endereco: {
        logradouro: 'Curralinho',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)