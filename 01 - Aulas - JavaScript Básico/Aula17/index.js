function saudacao(nome){
    console.log(`Olá ${nome}!`);
    return 1234;
}

saudacao('Luiz');

const variavel = saudacao('Lucas');//A variavel atribui apenas o que o RETORNO da função
console.log(variavel);
//-----------------------------------------------------------
function bomDia(nome){
    return `Bom dia ${nome}, tudo bem?`;
}

bomDia('Testando');//não exibira nada
const funcao = bomDia('Leidson');
console.log(funcao);
//-----------------------------------------------------------
function soma(x, y){//podemos também iniciar um valor exemplo: soma(x = 1, y = 2)
    const resultado = x + y;
    return resultado;
    console.log('Olá mundo');//Nada abaixo do return será executado
}

soma(10, 10);//não exibe no console

console.log(soma(3, 5));
console.log(soma('Luiz', ' Otávio'));//pode alterar o tipo do valor
const resultado = soma(2 ,2);
console.log(resultado);
//-----------------------------------------------------------
const raiz1 = function(n){ //(Função padrão)
    return n ** 0.5;
};
console.log('Digite um número para saber a raiz quadrada: ')
console.log(raiz1(9));
//--------------------- (Função Arrow "=>")
const raiz2 = n => {
    return n ** 0.5;
};
console.log('Digite um número para saber a raiz quadrada: ')
console.log(raiz2(9));
//--------------------- (Função arrow unique line)
const raiz3 = n => n ** 0.5;
console.log('Digite um número para saber a raiz quadrada: ')
console.log(raiz3(9));