let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as ações
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");

  document.getElementById(secao).classList.remove("hidden"); 
}

function adicionarLivro() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const ano = document.getElementById("ano").value;

  if (titulo && autor && ano) {
    biblioteca.push({ titulo, autor, ano });
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";

    atualizarLista();

    alert("Livro adicionado com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function buscarLivro() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarLivroParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  livroParaAlterar = biblioteca.find((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  if (livroParaAlterar) {
    document.getElementById("form-alternar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
    document.getElementById("novo-autor").value = livroParaAlterar.autor;
    document.getElementById("novo-ano").value = livroParaAlterar.ano;
  } else {
    alert("Livro não encontrado.");
  }
}

function alterarLivro() {
  if (livroParaAlterar) {
    const novoTitulo = document.getElementById("novo-titulo").value.trim();
    const novoAutor = document.getElementById("novo-autor").value.trim();
    const novoAno = parseInt(document.getElementById("novo-ano").value.trim());

    if (novoTitulo && novoAutor && !isNaN(novoAno)) {
      livroParaAlterar.titulo = novoTitulo;
      livroParaAlterar.autor = novoAutor;
      livroParaAlterar.ano = novoAno;

      atualizarLista();
      alert("Livro alterado com sucesso!");
      document.getElementById("form-alternar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  if (lista.length === 0) {
    const linha = document.createElement("tr");
    const coluna = document.createElement("td");
    coluna.colSpan = 3;
    coluna.textContent = "Nenhum livro encontrado.";
    coluna.style.textAlign = "center";
    linha.appendChild(coluna);
    tabela.appendChild(linha);
    return;
  }

  lista.forEach((livro) => {
    const linha = document.createElement("tr");

    const colunaTitulo = document.createElement("td");
    colunaTitulo.textContent = livro.titulo;

    const colunaAutor = document.createElement("td");
    colunaAutor.textContent = livro.autor;

    const colunaAno = document.createElement("td");
    colunaAno.textContent = livro.ano;

    linha.appendChild(colunaTitulo);
    linha.appendChild(colunaAutor);
    linha.appendChild(colunaAno);

    tabela.appendChild(linha);
  });
}