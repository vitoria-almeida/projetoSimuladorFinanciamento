export class Parcela {
    #numero
    #valor
    #juros
    #amortizacao
    #saldo

    constructor(numero, valor, juros, amortizacao, saldo) {
        this.#numero = numero
        this.#valor = valor
        this.#juro = juros
        this.#amortizacao = amortizacao
        this.#saldo = saldo
    }

    getSaldo() {
        return this.#saldo
    }
}