function discos() {
    let titulo = prompt("Digite o titulo do disco");
    let autor = propmt("Digite o autor do disco");
    let preco = parseFloat(prompt("Digite o preço do disco"));
    let ano = parseInt(("Digite o ano de publicação do disco"))
    biblioteca.push({titulo, autor, ano, preco});
    alert("disco comprado com sucesso");
}

discos();