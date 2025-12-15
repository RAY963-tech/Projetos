import { Conta } from "../model/Conta";
import { ContaRepository } from "./ContaRepository";


export class ContaRepositoryMemoria implements ContaRepository {
    private contas: Conta[] = [];


    procurarPorNumero(numero: number): Conta | undefined {
       return this.contas.find(c => c.numero === numero);      
    }

    listarTodas(): void {
        this.contas.forEach(c => console.log(c));
    }

    cadastrar(conta: Conta): void {
        this.contas.push(conta);
    }
    
    atualizar(conta: Conta): void {
        const index = this.contas.findIndex(c => c.numero === conta.numero);
        if (index !== -1) {
            this.contas[index] = conta;
        }
    }

    deletar(numero: number): void {
        this.contas = this.contas.filter(c => c.numero !== numero);
        
    }

    sacar(numero: number, valor: number): void {
        const conta = this.procurarPorNumero(numero);
        if (conta) {
            conta.saldo -= valor;
        }
    }

    depositar(numero: number, valor: number): void {
        const conta = this.procurarPorNumero(numero);
        if (conta) {
            conta.saldo += valor;
        }
    }

    transferis(numeroOrigem: number, numeroDestino: number, valor: number): void {
        this.sacar(numeroOrigem, valor);
        this.depositar(numeroDestino, valor);
    }

}

