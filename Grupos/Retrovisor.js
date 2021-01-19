const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
/*
[ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]
Armazena o resultado e acessamos com o \1
*/

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
/*
[ 'Lentamente é mente muito lenta.' ]
Armazenou lenta no retrovisor 1 e mente no retrovisor 2
*/

console.log(texto2.match(/(?:lenta)(mente).*\1/gi))
/*
[ 'Lentamente é mente' ]
Armazenou mente no retrovisor 1, pois o '?' deixa como grupo opcional
*/

console.log(texto2.match(/(lenta)(mente)?/gi))
/*
[ 'Lentamente', 'lenta' ]
*/

console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))
/*
mente é mente muito lenta.
Substitui a palavra pelo segundo retrovisor
*/

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))