/* (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

--> Isso é substituído
    if (pontuacaoUsuario >= 1000) {
        console.log('Usuário VIP')
    } else  {
        console.log('Usuário normal');
    }

*/

const pontuacaoUsuario = 999.9;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'branco';
const corPadrao = corUsuario || 'preta';

console.log(`${nivelUsuario},` ,corPadrao);