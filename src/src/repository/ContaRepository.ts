import { Conta } from "../model/Conta";

export interface ContaRepository {


    //CRUD da COnta
    procurarPorNumero(numero: number): Conta | undefined;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //Métodos Bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferis(numeroOrigem: number, numeroDestino: number, valor: number): void;

}