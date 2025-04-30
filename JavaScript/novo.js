// imprimir números de 1 a 20:

for (let i= 2; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// calcular a soma dos números:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);

let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);