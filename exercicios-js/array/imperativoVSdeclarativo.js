const alunos = [
    { nome: 'Erich', nota: 9 },
    { nome: 'Lara', nota: 9.9 }
]

// imperativo -> como ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativo -> o que ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)