const textoUmaLinha = '...' //aspas simples ou duplas

const textoMultiLinha = `
    linha 1
    linha 2
`
//Cuidado com o tab
console.log('	'.match(/\s/g)); //Busca a ocorrência de espaços
/*
[ ' ', ' ', ' ' ]
Encontrou isso mas digitei tab e apareceu 3 espaços
Isso porque a ide está identando usando espaços
se colocarmos a opção de identar com tab o resultado encontraeia a ocorrência de um tab

Se for no space da ide e mudar a identação para tab funciona com tab
[ '\t' ]
*/