const texto = 'Bom\ndia'

console.log(texto.match(/./gi))
/*
[ 'B', 'o', 'm', 'd', 'i', 'a' ]
\n não é um coringa
*/

console.log(texto.match(/.../gi)) //ponto não engloba o \n
/*
[ 'Bom', 'dia' ]
*/

console.log(texto.match(/..../gi))
/**
 * null
o \n não é resolvido pelo ponto, por isso não encontra 4 ocorrências 
*/