// --- Exercicio de fixação ---
function fimdesemana(dia) {
    return dia === "Sabado" || dia === "Domingo";
}

console.log(fimdesemana('Sabado'));
console.log(fimdesemana('Domingo'));

// --- Exercicio de fixação --- 
function naoAlduto(idade) {
    return ! (idade >= 18); 
}

console.log(naoAlduto(20)); //
console.log(naoAlduto(16)); // 