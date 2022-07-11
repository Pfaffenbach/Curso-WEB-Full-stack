const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) // por não existir esse elemento ele print com indefinido

valores[4] = 10
console.log(valores[4])

console.log(valores.length) // vendo o tamanho do array

valores.push({ id: 3 }, false, null, 'teste') // push adiciona novos valores no array, pode misturar dados no array
console.log(valores)

console.log(valores.pop()) // exclui o ultimo item do array
delete valores[0] // exclui um item expecífico do array
console.log(valores)

console.log(typeof valores)