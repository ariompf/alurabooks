//HTML
const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

//Evento de Click
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

//Sort
function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}