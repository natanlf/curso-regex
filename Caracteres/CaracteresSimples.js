const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log(texto.split(regexVirgula))
/*
[ '1', '2', '3', '4', '5', '6', 'a.b c! c!d?e' ]
Quebra os elementos onde tem vírgulas
*/

console.log(texto.match(regexVirgula))
/*
[ ',', index: 1, input: '1,2,3,4,5,6,a.b c! c!d?e', groups: undefined ]
Não colocando global mostra apenas a primeira ocorrência
*/
console.log(texto.match(/,/g))
/*
[ ',', ',', ',', ',', ',', ',' ]
Mostra todas as ocorrências da vírgula
*/

console.log(texto.match(/A/g))
/*
null
Como não tem nehum A maiusculo não encontra nada
*/

console.log(texto.match(/A/gi))
/*
[ 'a' ]
Com ignore case encontra um a
*/

console.log(texto.match(/2/g))
/*
[ '2' ]
*/

console.log(texto.match(/b c!d/))
/*
[
  'b c!d',
  index: 14,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined
]
*/