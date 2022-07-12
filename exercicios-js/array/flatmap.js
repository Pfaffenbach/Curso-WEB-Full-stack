const escola = [
    {
        nome: 'Turma 1',
        alunos: [{
            nome: 'Erich',
            nota: 9.5
        }, {
            nome: 'Iago',
            nota: 5.5
        }]
    },
    {
        nome: 'Turma 2',
        alunos: [{
            nome: 'Neto',
            nota: 10
        }, {
            nome: 'Lucas',
            nota: 8.5
        }]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([1, 2], [3, 4], [5, 6], [6, 7]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)