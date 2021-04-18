import prompt from "prompt-sync";

let teclado = prompt()

import Capitulo from "./Capitulo";
import Livro from "./Livro"
import Autor from "./Autor"

export default class Livraria {

    private _livro: Livro[];
    private _capitulo: Capitulo[];
    private _autor: Autor[];

    constructor() {
        this._livro = [];
        this._capitulo = [];
        this._autor = [];

    }
    public get livro(): Livro[] {
        return this._livro;
    }
    public get capitulo(): Capitulo[] {
        return this._capitulo;
    }
    public get autor(): Autor[] {
        return this._autor;
    }

    public set livro(livro: Livro[]) {
        this._livro;
    }
    public set capitulo(capitulo: Capitulo[]) {
        this._capitulo;
    }
    public set autor(autor: Autor[]) {
        this._autor;
    }

    //case 1
    private cadastrarLivro(titulo: string, ISBN: string): number {
        if (this._livro.length <= 500) {
            return this._livro.push(new Livro(titulo, ISBN));
        } else {
            return -1;
        }
    }
    //case 1
    private cadastrarAutores(nome:string, dataNasc: Date): any {
        let vezes = 0
        let quantidadeAutores = +teclado('Digite o número de autores a cadastrar: ')
        for (let i = 0; i<= quantidadeAutores; i++){
            console.log (`Cadastro de Autor (${i}/${quantidadeAutores})`)
            let autor: Autor = new Autor (teclado('Digite o nome do autor: '), new Date (teclado('Digite a data de naschimento do autor:')))
        }
    }
    //case 1
    private cadastrarCapitulos(titulo:string, texto: string): any {
        let vezes = 0
        let quantidadeCapitulos = +teclado('Digite o número de capitulos a cadastrar: ')
        for (let i = 0; i<= quantidadeCapitulos; i++){
            console.log (`Cadastro de Autor (${i}/${quantidadeCapitulos})`)
            let capitulo: Capitulo = new Capitulo(teclado('Digite o titulo do capítulo: '),teclado('Digite o texto do capítulo: '))
        }
    }
}   