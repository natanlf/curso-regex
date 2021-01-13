const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
/*
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
Pega todas as letras minusculas dentro do intervalo de a até z
*/

console.log(texto.match(/[b-d]/g))
/* [ 'b', 'c', 'd' ] */
console.log(texto.match(/[2-4]/g))
/*[ '2', '3', '4' ] */

console.log(texto.match(/[A-Z1-3]/gi))
/*
[
  '1', '2', '3',
  'a', 'b', 'c',
  'd', 'e', 'f'
]
Temos dois intervalos e por ter o i conseguiu pegar as letras,
pois defini na regex letras maiusculas mas na string só tem minusculas
*/