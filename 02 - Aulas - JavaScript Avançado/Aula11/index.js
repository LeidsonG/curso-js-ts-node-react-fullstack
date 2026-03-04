function getTextDay(dayOfTheWeek) {
    const data = new Date();
let diaSemana = data.getDay();
    const nomeDia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let dayText;

    switch (dayOfTheWeek) {
        case 0:
            dayOfTheWeek = nomeDia[0];
            return dayOfTheWeek;
        case 1:
            dayOfTheWeek = nomeDia[1];
            return dayOfTheWeek;
        case 2:
            dayOfTheWeek = nomeDia[2];
            return dayOfTheWeek;
        case 3:
            dayOfTheWeek = nomeDia[3];
            return dayOfTheWeek;
        case 4:
            dayOfTheWeek = nomeDia[4];
            return dayOfTheWeek;
        case 5:
            dayOfTheWeek = nomeDia[5];
            return dayOfTheWeek;
        case 6:
            dayOfTheWeek = nomeDia[6];
            return dayOfTheWeek;
        default:
            console.log('Error!')
    }
}


