const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

/*
Como é uma ou mais ocorrências na letra 'o'
o fog fica null
[ 'fogo', 'FOGOOOOOO' ]
null
*/

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g)) //[0-9] -> \d
/*
[
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
]
*/

console.log(texto3.match(/[0-9]+/g)) //[0-9] -> \d
/*
o '+' permite pegar todos os elementos de uma vez encontrados no conjunto
[ '0123456789' ]
*/