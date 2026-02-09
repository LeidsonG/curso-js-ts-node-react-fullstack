const alunosExemplo = ['Luiz', 'Maria', 'João', 1, 61.2, true,'NÃO É BOA PRÁTICA'];//Vários tipos de dados não é uma boa prática!!!

const alunos = ['Luiz', 'Maria', 'João']; //os valores de objetos CONST podem ser alterados (Explicação no README)

console.log(alunos);
console.log(alunos[0]);//Luiz
console.log(alunos[2]);//João

alunos[0] = 'Eduardo';
console.log(alunos)
console.log(alunos[0]);

alunos[3] = 'Joana';
console.log(alunos);
console.log(alunos.length);

alunos.push('José'); //push adiciona no fim do array
alunos.push('Fábio');
console.log(alunos);

alunos.unshift('Luiza'); //unshift adiciona no começo do array
console.log(alunos);

//alunos.pop(); //remove o último elemento do array
//alunos.shift(); //remove o primeiro elemento do array
let removido = alunos.pop(); //remove e adiciona o removido em uma variável
removido = alunos.shift(); //remove e adiciona o removido em uma variável
console.log(alunos);
console.log(removido);

delete alunos[1]; //Remove o valor, mas não o indice
console.log(alunos);
console.log(alunos[50]); //undefined


alunos.push('Luiz');
alunos.push('Pedro');
alunos[1] = 'Ruan'
console.log(alunos);

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -4));

console.log(typeof alunos); //array é um 'objeto' em JS
console.log(alunos instanceof Array); //é um array? true

alunos = 123; //podemos mudar o tipo da variável LET para qualquer outra coisa
console.log(alunos);
console.log(typeof alunos); //number
console.log(alunos instanceof Array); //é um array? false