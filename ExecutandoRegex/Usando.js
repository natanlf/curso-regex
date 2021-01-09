const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos de regExp...')
console.log(regexNove.test(texto))

/*
Métodos de regExp...
true
A regex através do método test procurou o valor 9 dentro da const texto
Achou e retortou true
*/

console.log(regexNove.exec(texto))

/*
[
  '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined
]
*/

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras))

/*
Métodos da string...
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
Busca as letras de forma global no intervalo de a até f
*/

console.log(texto.search(regexLetras))
/*
20
Search busca o indice do primeiro elemento da regex passada 
*/

console.log(texto.replace(regexLetras, 'Achei'))

/*
0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
Tudo que a regex encontrou foi substiuído pela palavra Achei
*/

console.log(texto.split(regexLetras))
/*
[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
Quebrou o texto a partir da experessão regular passada como parametro
 */