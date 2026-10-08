import { ItemBase } from "./ItemBase.js";

export class Ebook extends ItemBase {
    constructor(titulo, autor, anoPublicacao, formatoArquivo) {
        super(titulo, autor, anoPublicacao);
        this.formatoArquivo = formatoArquivo;
    }

    calcularMulta(diasAtraso) {
        console.log(
            "[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor"
        );

        return 0.00;
    }
}
