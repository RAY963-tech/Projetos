import { Conta } from "../model/Conta";

export interface ContaRepository {
    procurarPorNumero(numero: number): Conta | undefined;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
}
