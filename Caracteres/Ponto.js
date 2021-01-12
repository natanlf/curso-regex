// . é um coringa, válido para uma posição
const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
/*
[ '1,2' ]
Procurou no texto 1.2, o ponto equivale a qualquer caracter
*/

console.log(texto.match(/1..2/g))
/*
null
Entre o 1 e 2 tem apenas um caracter por isso deu null
*/

console.log(texto.match(/1..,/g))
/*
[ '1,2,' ]
*/

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
/*
[ '8.3', '8.8' ]
*/

console.log(notas.match(/.\../g))
/*
[ '8.3', '7.1', '8.8', '0.0' ]
Pesquisou qualquer caracter ponto qualquer caracter
*/