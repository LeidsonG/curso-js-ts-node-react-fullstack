const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 34
};
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
//----------------------------------------
function criaPessoa (nome, sobrenome, idade) {
    return{nome, sobrenome, idade};
        /*O JS entende a abreviação acima automática do que seria igual abaixo.
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };*/
}
const pessoa = criaPessoa('Lucas', 'Henrique', 25);
console.log(pessoa.nome, pessoa.sobrenome);

console.log('--------------------------------');

const pesssoa = {
    nome: 'Italo',
    sobrenome: 'Nunes',
    idade: 52,

    fala() {
        console.log(`Me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
    },
    icrementaIdade() {
        this.idade++;
    }
};
pesssoa.fala();
pesssoa.icrementaIdade();
pesssoa.fala();
pesssoa.icrementaIdade();
pesssoa.fala();
pesssoa.icrementaIdade();
pesssoa.fala();