const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
/*
[
  ',', ',', ',', 'a',
  '.', 'b', ' ', 'c',
  '!', 'd', '?', 'e',
  '[', 'f'
]
*/

console.log(texto.match(/[^\d!\?\[\s,\.]/g))
/*
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))