// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'galaxy'
produto['marca do produto'] = 'Samsumg'
produto.preco = 25000.00

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

console.log('-----------------------------------------------')

const carro = {
    modelo: '320i',
    valor: 150000,
    proprietario: {
        nome: 'Erich',
        idade: 21,
        endereco: {
            logradouro: 'Curralinho',
            numero: 432
        }
    },
    condutores: [{
        nome: 'Claudia',
        idade: 52
    }, {
        nome: 'Fred',
        idade: 57
    }],
    calcularValorDoSeguro: function () {
        // calculo do valor do seguro
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Major Armando Rubens Storino'
console.log(carro)

console.log('-----------------------------------------------')

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
//console.log(carro.condutores) //undefined
//console.log(carro.condutores.length) // causa erro