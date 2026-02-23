/* (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

--> Isso é substituído
    if (pontuaaoUsuario >= 1000) {
        console.log('Usuário VIP')
    } else  {
        console.log('Usuário normal');
    }

*/

const pontuaaoUsuario = 999.9;
const nivelUsuario = pontuaaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'branco';
const corPadrao = corUsuario || 'preta';

console.log(`${nivelUsuario},` ,corPadrao);