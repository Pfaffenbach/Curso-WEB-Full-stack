const notas = [7.7, 6.6, 5.5, 8.8, 9.9]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7)
        notasBaixas1.push(notas[i])
}
console.log(notasBaixas1)

console.log("-------------------------")

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

console.log("-------------------------")

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

console.log("-------------------------")

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)