export default class Autor {
    private _nome: string;
    private _dataNasc: Date;

    constructor(nome: string, dateNasc: Date) {
        this._nome = nome;
        this._dataNasc = dateNasc;
    }

    public get nome():string{
        return this._nome
    }

    public get dataNasc():Date{
        return this._dataNasc;
    }
}