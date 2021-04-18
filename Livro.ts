import Autor from "./Autor";
import Capitulo from "./Capitulo";

export default class Livro {

    private _titulo: string;
    private _ISBN: string;
    private _autores: Autor[];
    private _capitulos: Capitulo[];

    constructor(titulo: string, ISBN: string) {
        this._titulo = titulo;
        this._ISBN = ISBN;
        this._autores = [];
        this._capitulos = [];
    }

    public get autores(): Autor[] {
        return this._autores;
    }

    public set autores(autores: Autor[]) {
        this._autores
    }

    public get capitulos(): Capitulo[] {
        return this._capitulos;
    }

    public set capitulos(capitulos: Capitulo[]) {
        this._capitulos;
    }

    public get ISBN(): string {
        return this._ISBN;
    }

    public set ISBN(ISBN: string) {
        this._ISBN = ISBN;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public adicionaAutor(autor: Autor): number {
        if (this._autores.length <= 6) {
            return this._autores.push(autor)
        }else{
            return -1
        }
    }
    public adicionaCapitulo(titulo: string, texto: string): number {
        if (this._capitulos.length <= 100) {
            return this._capitulos.push(new Capitulo(titulo, texto))
        }else{
            return -1
        }
    }

    public removeAutor(autor: Autor): number{
        let autorToRemove = this._autores.indexOf(autor);
        if(autorToRemove != -1){
            this._autores.splice(autorToRemove,1);
        }
        return autorToRemove;
    }
    public removeCapitulo(capitulo: Capitulo): number{
        let capituloToRemove = this._capitulos.indexOf(capitulo);
        if(capituloToRemove != -1){
            this._capitulos.splice(capituloToRemove,1);
        }
        return capituloToRemove;
    }
}
