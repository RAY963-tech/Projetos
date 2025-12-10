

import readlinesync = require("readline-sync");
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";


export function main() {

    let opcao: number;

  
   // Objeto da Classe ContaCorrente (Teste)
    const conta: ContaCorrente = new ContaCorrente(1, 123, 1, "Adriana", 10000, 1000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);

        }
    
switch (opcao) {
        case 1:
            console.log("\n\nCriar Conta\n\n");
            

            break;
        case 2:
            console.log("\n\nLista todas as contas\n\n");


            break;
        case 3:
            console.log("\n\nConsultar dados da Conta - por número\n\n");


            break;
        case 4:
            console.log("\n\nAtualizar dados da Conta\n\n");


            break;
        case 5:
            console.log("\n\nApagar uma Conta\n\n");


            break;
        case 6:
            console.log("\n\nSaque\n\n");


            break;
        case 7:
            console.log("\n\nDepósito\n\n");


            break;
        case 8:
            console.log("\n\nTransferência entre Contas\n\n");
                    
                    
            break;
        default:
            console.log("\nOpção Inválida!\n");
       }
    }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("gitnub.com/conteudoGeneration");
    console.log("********************************************************");

}
    

main();