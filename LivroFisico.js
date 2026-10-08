import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoPublicacao, corredor) {
        super(titulo, autor, anoPublicacao);
        this.corredor = corredor;
    }

    calcularMulta(diasAtraso) {
        let multa = diasAtraso * 2.50;

        console.log("Multa de livro físico: R$ ");

        return multa;
    }
}