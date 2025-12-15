import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";

export function main() {

    // Instância da Classe ContaController
    let contas: ContaController = new ContaController();

    // Variáveis Auxiliares
    let opcao: number;
    let numero: number;
    let agencia: number;
    let tipo: number;
    let saldo: number;
    let limite: number;
    let aniversario: number;
    let valor: number;
    let numeroDestino: number;
    let titular: string;

    const tiposConta = ["Conta Corrente", "Conta Poupança"];

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Número              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir                           ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log(colors.reset);

        opcao = readlinesync.questionInt("Digite a opção desejada: ");

        if (opcao === 9) {
            console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!");
            sobre();
            process.exit(0);

        }

        switch (opcao) {

            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);

                agencia = readlinesync.questionInt("Digite o número da Agência: ");
                titular = readlinesync.question("Digite o nome do Titular: ");

                tipo = readlinesync.keyInSelect(tiposConta, "Escolha o tipo da Conta: ", { cancel: false }) + 1;

                saldo = readlinesync.questionFloat("Digite o saldo inicial (R$): ");

                if (tipo === 1) {
                    limite = readlinesync.questionFloat("Digite o limite da Conta (R$): ");
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumeroConta(), agencia, tipo, titular, saldo, limite)
                    );
                } else {
                    aniversario = readlinesync.questionInt("Digite o dia do aniversário da Conta: ");
                    contas.cadastrar(
                        new ContaPoupanca(contas.gerarNumeroConta(), agencia, tipo, titular, saldo, aniversario)
                    );
                }

                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\nListar Todas as Contas\n", colors.reset);
                contas.listarTodas();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar Conta por Número\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da Conta: ");
                contas.procurarPorNumero(numero);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.red, "\nAtualização ainda não implementada.\n", colors.reset);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\nApagar Conta\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da Conta: ");
                contas.deletar(numero);
                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\nSaque\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da Conta: ");
                valor = readlinesync.questionFloat("Digite o valor do Saque (R$): ");
                contas.sacar(numero, valor);
                keyPress();
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\nDepósito\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da Conta: ");
                valor = readlinesync.questionFloat("Digite o valor do Depósito (R$): ");
                contas.depositar(numero, valor);
                keyPress();
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\nTransferência\n", colors.reset);
                numero = readlinesync.questionInt("Digite o número da Conta de Origem: ");
                numeroDestino = readlinesync.questionInt("Digite o número da Conta de Destino: ");
                valor = readlinesync.questionFloat("Digite o valor da Transferência (R$): ");
                contas.transferir(numero, numeroDestino, valor);
                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\nOpção inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

/* Dados da Pessoa Desenvolvedora */
export function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por: Rayane Nogueira");
    console.log("Generation Brasil");
    console.log("******************************************************");
}

function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    readlinesync.question("");
}

main();
