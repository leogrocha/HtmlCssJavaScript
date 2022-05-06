import dre from '../dre.js';

export default class Dre {
    constructor(dre) {
        this.liquidez_variaveis = dre[0].liquidez_variaveis;
        this.receita_bruta = this.liquidez_variaveis.receita_bruta;
        this.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral = this.liquidez_variaveis.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral;

        this.liquidez_indices = dre[0].liquidez_indices;
        this.lucratividade = this.liquidez_indices.lucratividade;
    }
}

const class_dre = new Dre(dre);
