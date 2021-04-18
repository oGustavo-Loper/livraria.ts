export default class Capitulo {
    private _titulo: string;
    private _texto: string

    constructor(titulo: string, texto: string) {
        this._titulo = titulo
        this._texto = texto

    }
    public get titulo(): string {
        return this._titulo
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get texto(): string {
        return this._texto
    }

    public set texto(texto: string) {
        this._texto = texto;
    }
}