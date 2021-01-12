const texto = 'a   b'

console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a   b/))
/*
[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
Ambos dão o mesmo resultado
*/

//no futuro veremos
console.log(texto.match(/a\s+b/))
/*
[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
Pode haver um ou mais espaços entre o a e b
*/

console.log(texto.match(/a {3}b/))
/*
[ 'a   b', index: 0, input: 'a   b', groups: undefined ]
Assim encontra 3 espaços literais
*/

console.log(texto.match(/a\s{3}b/))