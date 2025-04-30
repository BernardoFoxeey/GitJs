function desconto() {
    let vip = prompt("Você é VIP?");
    let quantidade = parseInt(prompt("Quantidade de produtos"));
    if (vip === "sim" && quantidade >= 5) {
        alert("Desconto de 10% aplicado");
    } else if (vip === "sim" && quantidade < 5) {
        alert("Desconto de 5% aplicado");
    }
}

desconto();