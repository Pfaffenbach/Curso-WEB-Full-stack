function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula 1', 123)
const aula2 = new Aula('Aula 2', 456)
console.log(aula1, aula2)

// simulando o new
function Novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)

    return obj
}

const aula3 = Novo(Aula, 'Aula 3', 789)
const aula4 = Novo(Aula, 'Aula 4', 101112)
console.log(aula3, aula4)