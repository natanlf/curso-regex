const texto = 'João recebeu 120 milhões apostando 6 9 21 23 45 46.'

//para definir quantificador usa {} 
console.log(texto.match(/\d{1,2}/g))
/*
[
  '12', '0',  '6',
  '9',  '21', '23',
  '45', '46'
]
Tenta pegar o máximo possível que consegue
*/

console.log(texto.match(/[0-9]{2}/g))
/*
[ '12', '21', '23', '45', '46' ]
Pega apenas os números com dois digitos
*/

console.log(texto.match(/\d{1,}/g))
/*
[
  '120', '6',
  '9',   '21',
  '23',  '45',
  '46'
]
Pega o máximo de números que conseguir, com 1 ou mais dígitos
*/

console.log(texto.match(/\w{7}/g));
/*
[ 'recebeu', 'apostan' ]
Pega o grupo de caracteres com 7 dígitos
Não trouxe milhões, pois o 'õ' não está contido dentro do shorthand w
*/

console.log(texto.match(/[\wõã]{7,}/g));
/*
[ 'recebeu', 'milhões', 'apostando' ]
Agora pegou milhões, pois temos um grupo que procura os caracteres do shorthand w 
e o õ
Mesmo com o ã o joão não aparece pois precisa ter pelo menos 7 caracteres na palavra
*/

//no futuro => borda
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g));
/*
[ '6', '9', '21', '23', '45', '46' ]
[ 'recebeu', 'milhões' ]
*/