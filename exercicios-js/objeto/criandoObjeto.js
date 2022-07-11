// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Mochila', 239.90, 0.45)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Erich', 7800, 4)
const f2 = criarFuncionario('Lara', 10000, 8)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Claudia'
console.log(filha)

// uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)