import prompt from "prompt-sync";
import Autor from "./Autor";
import Capitulo from "./Capitulo";
import Livraria from "./Livraria";
import Livro from "./Livro";

let teclado = prompt();

console.clear();
let livraria = new Livraria()

let option: Number = 0;

while (option < 7) {
    console.log(MsgMenuPrincipal())

    option = +teclado('Opção: ')

    switch (option) {
        case 1:
            cadastrarLivro()
            break
        case 2:
            deletaLivro()
            break
        case 3:
            listarLivros()
            break
        case 4:
            resetarAcervo()
            break
        case 5:
            modificaLivro()
            break
        case 6:
            ListagemCapitulos()
            break
    }

}

function cadastrarLivro() {
    let capitulo = []
    let autor = []
    
    let tituloLivro = teclado("Digite o título do livro: ");
    let ISBN = teclado("Digite o ISBN: ");
    
    let quantidadeCap = +teclado("Informe a quantidade de capítulos: ");
    for (let i = 0; i < quantidadeCap; i++) {
        console.log(`Capítulo ${(i + 1)} de ${quantidadeCap}`);
        let titulo = teclado("Informe o título do capítulo: ");
        let texto = teclado("Informe o texto do capítulo: ");
        capitulo.push(new Capitulo(titulo, texto));
    }
    let quantidadeAut = +teclado("Informe a quantidade de autores: ");

    for (let i = 0; i < quantidadeAut; i++) {
        console.log(`Autor ${i + 1} de ${quantidadeAut}`);
        let nome = teclado("Informe o nome do autor: ");
        let dtNascimento = teclado("Informe a data de nascimento do autor: ");
        autor.push(new Autor(nome, new Date(dtNascimento)));
    }

    livraria.cadastrarLivro(new Livro(tituloLivro, ISBN), autor, capitulo);
    console.log("Livro inserido com sucesso!");
}

function listarLivros() {
    let vezes = 0
    for (let livro of livraria.livros) {
        vezes++
        console.log(`Livro ${vezes}: Título: ${livro.titulo}`)
        console.log(`     Numero de Autores: ${livro.autores.length}`)
        console.log(`   Numero de capitulos: ${livro.capitulos.length}`)
    }
}

function deletaLivro() {
    listarLivros()
    let opcao = +teclado('Digite o livro que deseja deletar: ')
    livraria.livros.splice(opcao - 1)
    console.log('Livro removido com sucesso.')
}

function ListagemCapitulos() {
    listarLivros()
    let opcao = +teclado('Digite o livro que deseja ver o capitulo: ')
    for (let i = 0; i < livraria.livros[opcao - 1].capitulos.length; i++) {
        console.log(`Capitulo ${opcao + 1}: ${livraria.livros[opcao - 1].capitulos[i].titulo}`)
    }
}

function adicionaCapitulo(livro: Livro) {
    let titulo = teclado('Titulo do capítulo: ')
    let texto = teclado('Texto do capítulo: ')
    livro.adicionaCapitulo(titulo, texto)
}
function adicionaAutor(livro: Livro) {
    let nome = teclado('Titulo do capítulo: ')
    let dataNasc = teclado('Texto do capítulo: ')
    livro.adicionaAutor(new Autor(nome, new Date(dataNasc)))
}

function modificaLivro() {
    listarLivros()
    let opcao = +teclado('Qual livro deseja modificar: ')
    let livro = livraria.livros[opcao - 1]
    console.log(msgMenuModificaLivro())
    let opcao2 = +teclado('Opção: ')
    switch (opcao2) {
        case 1:
            adicionaCapitulo(livro)
            break
        case 2:
            adicionaAutor(livro)
            break
    }
}

function resetarAcervo() {
    livraria = new Livraria()
}

function msgMenuModificaLivro(): string {
    return (
        '+================================================================+\n' +
        '|                    Livraria Jalee                              |\n' +
        '|________________________________________________________________|\n' +
        '| 1. Inserir novo capítulo                                       |\n' +
        '| 2. Inserir novo autor                                          |\n' +
        '|________________________________________________________________|'
    )

}

function MsgMenuPrincipal(): string {
    return (
        '+===============================\n' +
        '|         Livraria Jalee       |\n' +
        '+------------------------------+\n' +
        '|1. cadastro livros            |\n' +
        '|2. remover livros             |\n' +
        '|3. listar livros              |\n' +
        '|4. resetar livros             |\n' +
        '|5. modificar livros           |\n' +
        '|6. listar capitulos de livro  |\n' +
        '|7. sair                       |\n' +
        '+------------------------------+'
    )
}

