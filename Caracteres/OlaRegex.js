const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi
console.log(texto.match(regex))

/* 
[ 'Casa', 'casa', 'CASA' ]
Encontrou o texto passado em todas as ocorrências ignorando o case
*/

console.log(texto.match(/a b/))

/*
[
  'a b',
  index: 3,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined
]
Procurou o texto a b, repre que a espaço b e traz em qual indice teve a primeira ocorrêcia
Traz também todo o texto
*/