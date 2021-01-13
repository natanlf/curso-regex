const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//para definir um conjunto de cactares (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g

console.log(texto.match(regexPares))
/**
[ '2', '4', '6' ]
Busca os pares
*/

console.log(texto.match(/02468/g))
/*
null
Não é um conjunto, por isso trouxe null, só acharia se estivessem
todos juntos
*/

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))
/*
[ 'nã', 'na' ]
Encontra ambos os as por causa do conjunto.
O que está dentro do conjunto procurou como um ou
*/