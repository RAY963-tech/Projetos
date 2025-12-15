import { Conta } from "../model/Conta";
import { colors } from "../util/Colors";

export class ContaController {
    deletar(numero: number) {
        throw new Error("Method not implemented.");
    }

    private listaContas: Array<Conta> = [];
    private numero: number = 0;

    public procurarPorNumero(numero: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.visualizar();
        } else {
            console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
        }
    }

    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green,
            "\nConta criada com sucesso!",
            colors.reset);
    }

    public sacar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.sacar(valor);
        } else {
            console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
        }
    }

    public depositar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
        } else {
            console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(valor, contaDestino);

            console.log(colors.fg.green,
                "\nTransferência realizada com sucesso!",
                colors.reset);
        } else {
            console.log(colors.fg.red,
                "\nConta de origem ou destino não encontrada!",
                colors.reset);
        }
    }

    public gerarNumeroConta(): number {
        return ++this.numero;
    }

    private buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }

        return null;
        
    }

}
