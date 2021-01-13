const texto = '.$+*?-'

//Dentro de um conjunto eles são elementos literais
//Não precisa de scape na maioria dos metacaracteres 
//encontrados dentro do conjunto
console.log(texto.match(/[+.?*$]/g))
/*
[ '.', '$', '+', '*', '?' ]
//Dentro de um conjunto eles são elementos literais
*/

console.log(texto.match(/[$-?]/g)) // é um intervalo (range)
/*
[ '.', '$', '+', '*', '?', '-' ]
O hífen se comporta como um metacaracter dentro do conjunto
Trouxe um intervalo, pois todos os simbolos que apareceram
estão dentro do intervalo da regex
*/

console.log(texto.match(/[$\-?]/g)) // NÃO é um intervalo (range)

console.log(texto.match(/[-?]/g)) // NÃO é um intervalo (range)

console.log(texto.match(/[.]/g))
/*
[ '.' ]
Se fosse um metacaracter não conseguiria trazer o ponto
*/

console.log(texto.match(/[+.?*$]./g))
/*
[ '.$', '+*', '?-' ]
*/

//Pode precisar de scape dentro do conjunto: - [ ] ^