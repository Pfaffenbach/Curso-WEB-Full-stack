const notas = [5.5, 6.6, 7.7, 8.8, 9.9]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Erich',
    sobrenome:'Pfaffenbach',
    idade: 21,
    peso: 80
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}