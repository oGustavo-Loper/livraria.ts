import Autor from "./Autor";
import Capitulo from "./Capitulo";
import Livro from "./Livro";

export default class Livraria{
    private _livro: Livro[];
    constructor(){
        this._livro = [];
    }
    public cadastrarLivro(livro : Livro, autores: Array<Autor>, capitulos: Array<Capitulo>){
        this.cadastraAutores(livro, autores);
        this.cadastraCapitulos(livro, capitulos);
        this._livro.push(livro);
    }
    public get livros(): Livro[]{
        return this._livro;
    }
    private cadastraAutores(livro : Livro, autores: Autor[]){
        for (let autor of autores){
            livro.adicionaAutor(autor);
        }
    }
    private cadastraCapitulos(livro : Livro, capitulos: Capitulo[]){
        for (let capitulo of capitulos){
            livro.adicionaCapitulo(capitulo.titulo, capitulo.texto);
        }
    }
}