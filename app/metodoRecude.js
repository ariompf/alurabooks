function calcularValorTotalDeLivrosDisponiveis(livrosDisponiveis) {
    return livrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
};