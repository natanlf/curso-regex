const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto.match(/\.mp3/g))
/*
[ '.mp3', '.mp3', '.mp3', '.mp3' ]
Pegandos as extensões .mp3
*/

//No furuto veremos como funciona o código abaixo
console.log(texto.match(/\w+\.mp3/g))