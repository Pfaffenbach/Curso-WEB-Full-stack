// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 4, 5) // pega os dois primeiros e ignora o resto
imprimirSoma()

// função com retorno
function soma(a, b) {
    return a + b
}

console.log(soma(5, 4))