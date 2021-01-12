// . ? * + - ^ $ | [] {} () \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))
/*
[ '1,2,3,4,5,6,a', 'b c!d?e' ]
Quando uso \. o "ponto" deixa de ser um metacaracter e passa a ser um valor literal
*/

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
/*
[
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e'
]
Quebrou com split pela , . ? ! espaço
*/