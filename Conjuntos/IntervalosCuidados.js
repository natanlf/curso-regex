const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
/*
Intervalo (Rage)
[ 'a', 'b', 'c', 'a', 'c' ]
*/

console.log(texto.match(/a-c/g))
/*
Não é intervalo (não é Range)
[ 'a-c' ]
*/

console.log(texto.match(/[A-z]/g)) //intervalos usam a ordem da tabela UNICODE
/*
[
  'A', 'B', 'C', '[',
  'a', 'b', 'c', ']',
  'a', 'c'
]
Na tabela UNICODE entre o A e z temos os colchetes
*/

console.log(texto.match(/[a-zA-Z]/g)) //intervalos usam a ordem da tabela UNICODE
/*
[
  'A', 'B', 'C',
  'a', 'b', 'c',
  'a', 'c'
]
Pega apenas as letras
*/

//Tem que respeitar a odem da tabela UNICODE
//console.log(texto.match(/[a-Z]/g))
//console.log(texto.match(/[4-1]/g))