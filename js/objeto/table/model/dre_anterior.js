import dre_anterior from '../dre_anterior.js';

export default class DreAnterior {
    constructor(dre_anterior) {
        this.liquidez_variaveis = dre_anterior[0].liquidez_variaveis;
        this.receita_bruta = this.liquidez_variaveis.receita_bruta;
        this.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral = this.liquidez_variaveis.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral;
    }
}

const dre = new DreAnterior(dre_anterior);
