const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main() {
  const nome = await perguntar("Digite seu nome: ");
  const idade = await perguntar("Digite sua idade: ");

  console.log("Nome:", nome);
  console.log("Idade:", idade);

  rl.close();
}

main();