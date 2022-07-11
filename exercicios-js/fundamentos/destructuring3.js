function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // varia entre 40 e 50
console.log(rand({ min: 955 })) // varia entre 955 e 1000
console.log(rand({})) // varia entre 0 e 1000
//console.log(rand()) // causa um erro