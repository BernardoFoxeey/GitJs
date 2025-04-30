let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let trabalhos = parseFloat(prompt("Digite a nota dos trabalhos:"));
let media = (nota1 + nota2 + nota3 + trabalhos) / 4;
let resultado = document.getElementById("resultado");
resultado.innerHTML = `A média final é: ${media.toFixed(2)}`;
if (media >= 7) {
    resultado.innerHTML += "<br>Você foi aprovado!";
}
else if (media >= 5) {
    resultado.innerHTML += "<br>Você está de recuperação!";
} else {
    resultado.innerHTML += "<br>Você foi reprovado!";
}
