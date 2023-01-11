import { Parcela } from './parcela.js'

class Financiamento {
    #taxaJuros
    #prazo
    #parcelas = []

    constructor(valor, entrada, taxaJuros, prazo) {
        this.taxaJuros = taxaJuros
        this.#prazo = prazo
        this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada))
    }

    static calculoJuros (valor, taxaJuros) {
        return valor * (taxaJuros / 100)
    }

    calculoParcelasMensais() {
        let saldo = this.#parcelas[this.#parcelas.length - 1].getSaldo()
        let prazo = this.#prazo - (this.#parcelas.length - 1)
        let amortizacao = saldo / prazo

        for(let i = 0; i < prazo; i++) {
            const numero = this.#parcelas.length
            const juros = Financiamento.calculoJuros(saldo, this.#taxaJuros)
            const valor = juros + amortizacao
            saldo -= amortizacao

            if(saldo <0) {
                saldo = 0
            }

            this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldo))
        }
    }
}