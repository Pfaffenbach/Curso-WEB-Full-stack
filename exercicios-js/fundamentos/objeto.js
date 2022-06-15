const prod1 = {} // criando um objeto vazio

prod1.nome = 'Galaxy S21fe'
prod1.preco = 2600.00
prod1['Desconto disponivel'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Iphone SE',
    preco: 3000.00
}
prod2['Desconto disponivel'] = 0.30 // evitar atributos com espaço

console.log(prod2)