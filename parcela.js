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

    getDadosFormatados() {
        const dados = []
        dados.push(this.#numero)
        dados.push(this.#valor.toLocaleString('pt-BR', {styke: 'currency', currency:'BRL'}))
        dados.push(this.#amortizacao.toLocaleString('pt-BR', {styke: 'currency', currency:'BRL'}))
        dados.push(this.#vjuros.toLocaleString('pt-BR', {styke: 'currency', currency:'BRL'}))
        dados.push(this.#saldo.toLocaleString('pt-BR', {styke: 'currency', currency:'BRL'}))
        return dados
    }
}