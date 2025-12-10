import { Conta } from "../model/Conta";
import { ContaRepository } from "./ContaRepository";

export class ContaRepositoryMemoria implements ContaRepository {
    private contas: Conta[] = [];

    cadastrar(conta: Conta): void {
        this.contas.push(conta);
    }

    atualizar(conta: Conta): void {
        const index = this.contas.findIndex(c => c.numero === conta.numero);
        if (index !== -1) {
            this.contas[index] = conta;
        } else {
            console.log("Conta não encontrada para atualização!");
        }
    }


    listarTodas(): void {
        if (this.contas.length === 0) {
            console.log("Nenhuma conta cadastrada!");
            return;
        
        }
        this.contas.forEach(conta => conta.visualizar());

    }

    procurarPorNumero(numero: number): Conta | undefined {
        return this.contas.find(c => c.numero === numero);
    }

    deletar(numero: number): void {
        const index = this.contas.findIndex(c => c.numero === numero);
        if (index !== -1) {
            this.contas.splice(index, 1);
        } else {
            console.log("Conta não encontrada!");
        }
    }
}