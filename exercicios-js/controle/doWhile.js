function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max + min)
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção encontrada foi ${opcao}.`)
} while (opcao != 1)

console.log('até a próxima!')