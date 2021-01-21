const texto = 'Pedrinho (filho de Pedro silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi))
/*
[ '(', 'a', ')', 'A', 'B', 'C' ]
Dentro de um conjunto, um grupo não existe
*/

console.log(texto.match(/([abc])/gi))
/*
[ 'a', 'A', 'B', 'C' ]
Conjunto sobrevive dentro de um grupo
*/

console.log(texto.match(/(abc)/gi))
/*
[ 'ABC' ]
*/