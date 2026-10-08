import readline from "readline/promises";
import { leitor } from "./leitor.js";
import { LivroFisico } from "./LivroFisico.js";
import { Ebook } from "./Ebook.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciarSistema() {

    console.log("===== SISTEMA DE BIBLIOTECA =====");

    const nome = await rl.question("Digite o nome do leitor: ");
    const idade = Number(await rl.question("Digite a idade do leitor: "));

    const usuario = new leitor(nome, idade);

    console.log(`Leitor: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);

    console.log("\nO que deseja cadastrar?");
    console.log("1 - Livro Físico");
    console.log("2 - E-book");

    const opcao = await rl.question("Digite uma opção: ");

    let item;

    
    const titulo = await rl.question("Digite o título: ");
    const autor = await rl.question("Digite o autor: ");
    const anoPublicacao = Number(
        await rl.question("Digite o ano de publicação: ")
    );

    // 4. Instancia a classe correta
    if (opcao === "1") {

        const corredor = await rl.question("Digite o corredor: ");

        item = new LivroFisico(
            titulo,
            autor,
            anoPublicacao,
            corredor
        );

    } else if (opcao === "2") {

        const formatoArquivo = await rl.question(
            "Digite o formato do arquivo: "
        );

        item = new Ebook(
            titulo,
            autor,
            anoPublicacao,
            formatoArquivo
        );

    } else {
        console.log("Opção inválida.");
        rl.close();
        return;
    }

  
    const diasAtraso = Number(
        await rl.question("\nQuantos dias de atraso teve a devolução? ")
    );


    const multa = item.calcularMulta(diasAtraso);

    console.log(`Valor total a pagar: R$ ${multa.toFixed(2)}`);

    // Fecha o terminal
    rl.close();
}

iniciarSistema();