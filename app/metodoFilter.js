//HTML
/* const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosFront.addEventListener('click', filtrarLivros); */
const botoes = document.querySelectorAll('.btn');

//ForEach
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

//Filter
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}