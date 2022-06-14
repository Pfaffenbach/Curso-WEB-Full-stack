const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio por não ter nada

console.log(escola.charCodeAt(3)) // Pega o valor associado ao digito selecionado (tabela ascii)
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // ignora a posição da string
console.log(escola.substring(0, 3)) // ignora a posição da string

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // substituindo a posição 3 por letra e

console.log('Ana,Maria,Pedro'.split(',')) // Sperando os valores passados