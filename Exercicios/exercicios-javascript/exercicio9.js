function manipularLivro(livro) {
    
    const { titulo, autor } = livro;
    console.log(`Título: ${titulo}, Autor: ${autor}`);

    
    function obterInformacoesLivro(livro) {
        return `O livro "${livro.titulo}" foi escrito por ${livro.autor}.`;
    }

    const informacoesLivro = obterInformacoesLivro(livro);
    console.log(informacoesLivro);
}

const livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

manipularLivro(livro);
