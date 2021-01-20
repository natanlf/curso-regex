const texto = 'supermercado hipermercado minimercado mercado'

console.log(texto.match(/(super|hiper|mini)?mercado/g))
console.log(texto.match(/((hi|su)per|mini)?mercado/g))
/*
[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
*/