const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) //[0-9]
/*
Números
[ '1', '2', '3', '4', '5', '6' ]
*/

console.log(texto.match(/\D/g)) // [^0-9]
/*
Não números
[
  ',',  ',', ',',  ',', ',',
  ',',  'a', '.',  'b', ' ',
  'c',  '!', 'd',  '?', 'e',
  '\t', '-', '\n', 'f', '_',
  'g'
]
*/

console.log(texto.match(/\w/g)) // [a-zA-Z0-9_]
/*
Caracteres
[
  ',',  ',', ',',  ',', ',',
  ',',  'a', '.',  'b', ' ',
  'c',  '!', 'd',  '?', 'e',
  '\t', '-', '\n', 'f', '_',
  'g'
]
*/

console.log(texto.match(/\W/g)) // [^a-zA-Z0-9_]
/*
Não Caracteres
[
  ',',  ',', ',',  ',',
  ',',  ',', '.',  ' ',
  '!',  '?', '\t', '-',
  '\n'
]
*/

console.log(texto.match(/\s/g)) // [\t\n\r\f]
/*
Espaço
[ ' ', '\t', '\n' ]
*/

console.log(texto.match(/\S/g)) // [^\t\n\r\f]
/*
Não é espaço
[
  '1', ',', '2', ',', '3',
  ',', '4', ',', '5', ',',
  '6', ',', 'a', '.', 'b',
  'c', '!', 'd', '?', 'e',
  '-', 'f', '_', 'g'
]
*/