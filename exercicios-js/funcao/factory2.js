function criarProduto(nomeProd, precoProd){
    return{
        nome: nomeProd,
        preco: precoProd,
        desconto: 0.1
    }
}

// Outra maneira de ser feito
/*
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
*/

console.log(criarProduto('Iphone', 5000))
console.log(criarProduto('Ipad', 7000.50))