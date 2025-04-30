let estado = 0;

function mudarLuz() {
    const luzVermelha = document.getElementById("Vermelha");
    const luzLaranja = document.getElementById("Laranja");
    const luzAmarela = document.getElementById("Amarela");
    const luzVerde = document.getElementById("Verde");
    const luzRoxo = document.getElementById("Roxo");

    luzVermelha.classList.remove("Vermelha");
    luzLaranja.classList.remove("Laranja");
    luzAmarela.classList.remove("Amarela");
    luzVerde.classList.remove("Verde");
    luzRoxo.classList.remove("Roxo");

    if (estado === 0) {
        luzVermelha.classList.add("Vermelha");
        estado = 1;
    } else if (estado === 1) {
        luzLaranja.classList.add("Laranja");
        estado = 2;
    } else if (estado === 2) {
        luzAmarela.classList.add("Amarela");
        estado = 3;
    } else {
        luzVerde.classList.add("Verde");
        estado = 0;
    }
    if (estado === 3) {
        luzRoxo.classList.add("Roxo");
        estado = 4;
    } else if (estado === 4) {
        luzRoxo.classList.remove("Roxo");
        estado = 0;

    }
}