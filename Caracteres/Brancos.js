const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca/))
/*
[ 'ca', index: 1, input: '\nca  r\nr   o s!\n', groups: undefined ]
Quando rodei a primeira vez tinha espeços mesmo com o tab, após mudar a identação para tab
o resultado será diferente
[ 'ca', index: 1, input: '\nca\tr\nr\to s!\n', groups: undefined ]
Deixei com tab mas identando com tab.
Para mudar a identação é só ir em spaces e trocar
*/

console.log(texto.match(/ca\t/))
/*
[ 'ca\t', index: 1, input: '\nca\tr\nr\to s!\n', groups: undefined ]
*/

console.log(texto.match(/ca\tr\nr\to s!/))
console.log(texto.match(/ca\tr\nr\to\ss!/))
/**
[
  'ca\tr\nr\to s!',
  index: 1,
  input: '\nca\tr\nr\to s!\n',
  groups: undefined
] 
O espaço pode ser \s ou apenas um espaço, dá o mesmo resultado
\s = espaço
\n = quebra a linha
\t = tab
*/