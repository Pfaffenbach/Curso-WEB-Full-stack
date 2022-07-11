const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)

// Verificando se são numeros inteiros
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.109
const avaliacao2 = 8.798

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

// Printando media com duas casas decimais
console.log(media.toFixed(2))

// Fazendo casting de number para String
console.log(media.toString())

// Fazendo a String mostrar o numero em binário
console.log(media.toString(2))

// Tipo de media
console.log(typeof media)