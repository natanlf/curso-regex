/*g - global
i - ignore case */

const texto = 'Carlos assinou o abaixo assinado.';

console.log(texto.match(/C|ab/))

/*
[
  'C',
  index: 0,
  input: 'Carlos assinou o abaixo assinado.',
  groups: undefined
]
Não achou ab porque não coloquei a flag global
*/
console.log(texto.match(/c|ab/))

/*
[
  'ab',
  index: 17,
  input: 'Carlos assinou o abaixo assinado.',
  groups: undefined
]
Procurou o c mas só temos o C maiusculo, por isso não achou e encontrou o ab
*/

console.log(texto.match(/c|ab/i))

/*
[
  'C',
  index: 0,
  input: 'Carlos assinou o abaixo assinado.',
  groups: undefined
]
Encontrou o c pois está com a flag i - ignore case
*/

console.log(texto.match(/ab|c/gi))

/*
[ 'C', 'ab' ]
Encotra ambos pois estou usando o global que procura todas as ocorrencias
e também o i - ignore case
*/