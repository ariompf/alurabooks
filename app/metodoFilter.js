//HTML
/* const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('click', filtrarLivros); */
const botoes = document.querySelectorAll('.btn');

//ForEach
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros));

//Filter
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
};

//let livrosFiltrados = botaoFiltro.value == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)

//Filtro Disponibilidade funcionando
document.getElementById('btnLivrosDisponiveis').addEventListener('click', filtrarLivrosDisponiveis);
 function filtrarLivrosDisponiveis() {
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    exibirOsLivrosNaTela(livrosDisponiveis);
};
