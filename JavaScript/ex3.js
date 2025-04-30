// condicionais com if else e else if

let nota = 70;
if (nota >= 80) {
    console.log('Parabens, voce foi aprovado(a)');
} else if (nota < 80 && nota >= 60){
    console.log('Voce está na nossa lista de espera');
} else {
    console.log('Voce foi reprovado(a)');
}

let vacina = 15;
if (vacina >= 60) {
    console.log('voce tem idade pra se vacinar!');
} else if (vacina < 60 && vacina >= 15){
    console.log('Aguarde a lista de espera');
} else {
    console.log('voce nao pode vacinar');
}

// notas
let nota1 = 85;
if (nota1 >= 90) {
    console.log("Excelente");
} else if (nota1 >= 80) {
    console.log("Bom");
} else {
    console.log("Voce precisa estudar");
}

// hora do dia 
let hora = 12;
if (hora >= 21) {
    console.log('Bom dia');
} else if (hora >= 15) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

// dia da semana 
let dia = 'segunda';
if (dia === 'domingo') {
    console.log('Folga em casa');
} else if (dia === 'terca') {
    console.log('dormir');
} else if (dia === 'quarta') {
    console.log('fazendo algo aleatorio');
} else {
    console.log('ir trampar');
}





