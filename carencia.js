import { Financiamento } from "./financiamento.js";
import { Parcela } from './parcela.js'

export class Carencia extends Financiamento {
    #carencia
    #taxaJuros
    #parcelas = []

    constructor(valor, entrada, taxaJuros, prazo, carencia) {
        super(valor, entrada, taxaJuros, prazo)
        this.#taxaJuros = taxaJuros
        this.#carencia = carencia
        this.#parcelas = super.getParcelas()
    }

    calculoParcelasMensais() {
        let saldo = this.#parcelas[0].getSaldo()

        for(let i = 0; i < this.#carencia; i++) {
            const numero = this.#parcelas.length
            saldo += Financiamento.calculoJuros(saldo, this.#taxaJuros)
            this.#parcelas.push(new Parcela(numero, 0, 0, 0, saldo))
        }
        super.calculoParcelasMensais()
    }
}