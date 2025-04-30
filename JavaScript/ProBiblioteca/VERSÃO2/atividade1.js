let semaforoAtual = "vermelho";

function mudarcor() {
    const semaforo = document.getElementById("semaforo");

    if (semaforoAtual === "vermelho") {
        semaforo.style.backgroundColor = "yellow";
        semaforoAtual = "amarelo";
    } else if (semaforoAtual === "amarelo") {
        semaforo.style.backgroundColor = "green";
        semaforoAtual = "verde";
    } else {
        semaforo.style.backgroundColor = "red";
        semaforoAtual = "vermelho";
    }
}

    