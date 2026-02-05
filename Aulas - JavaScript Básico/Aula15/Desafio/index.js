/*
===DESAFIO: Tente imprimir conforme abaixo de acordo com as aulas:===
O seu número é: 55.5611
É NaN: false.
Raiz quadrada: 7.4539318483603.
55.5611 é inteiro: false.
Arredondando para baixo: 55
Arredondando para cima: 56
Com duas casas decimais: 55.56
*/

const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;