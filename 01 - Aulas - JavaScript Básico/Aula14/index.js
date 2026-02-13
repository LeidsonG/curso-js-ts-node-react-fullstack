let num1 = 1500.55121542; //number
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(num1.toString());
console.log(num1.toString(2)); //Devolve o número em binário
console.log(num1.toFixed(2)); //Duas casas decimais


let num3 = 10;
let temp1 = num3 * 'Ola';
let temp2 = num3 * '5'; //Não fazer contas com Strings
console.log(Number.isInteger(num3)); //true (É inteiro)
console.log(Number.isNaN(temp1)); //É um NaN
console.log(Number.isNaN(temp2)); //Não é um NaN


let num4 = 0.7;
let num5 = 0.1;
num4 = parseFloat(num4.toFixed(2)); //Para fixar a imprecisão das casas decimais. Number() tambem funciona.
console.log(num4 + num5); //0.799999999999
console.log(num4);
console.log(Number.isInteger(num4));
console.log(((num4 * 100) + (num5 * 100)) / 100);