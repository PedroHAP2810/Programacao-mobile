function manipularObjetoPessoa(pessoa) {
    
    pessoa.profissao = "Desenvolvedor";  
    console.log("Nova propriedade 'profissao' adicionada:", pessoa);

   
    delete pessoa.idade;  
    console.log("Propriedade 'idade' removida:", pessoa);

 
    console.log("Propriedades do objeto pessoa:");
    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}


const pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };


manipularObjetoPessoa(pessoa);