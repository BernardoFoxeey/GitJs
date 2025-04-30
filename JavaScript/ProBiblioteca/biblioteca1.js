let biblioteca = [];

function adcionarlivro() {
    let titulo = prompt("Digite o titulo do livro");
    let autor = propmt("Digite o autor do livro");
    let ano = parseInt(("Digite o ano de publicação do livro"))
    biblioteca.push({titulo, autor, ano});
    alert("Livro adicionado com sucesso");
}


function listarlivros() {
    if (biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca: \n";
        biblioteca.forEach((livro) => {
            mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`;
        });
        alert(mensagem);
    } else {
        alert("A biblioteca está vazia");
    }
}


function exibirmenu() {
  return prompt(
    "Menu\n" +
    "!. Adicionar Livro\n" +
    "2. Listar Livros\n" +
    "3. Listar Livros\n" +
    "4. Sair\n" +
    "Escolha uma opção:"
    );
}

exibirmenu();
adcionarlivro();
listarlivros();
