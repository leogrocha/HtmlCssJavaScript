import balanco_anterior from "../balanco_anterior.js";

export default class BalancoAnterior {
    constructor(balanco_anterior) {
        this.liquidez_variaveis = balanco_anterior[0].liquidez_variaveis;
        this.ativo = this.liquidez_variaveis.ativo;
        this.ativo_circulante = this.liquidez_variaveis.ativo_circulante;
        this.ativo_nao_circulante = this.liquidez_variaveis.ativo_nao_circulante;
        this.disponibilidades = this.liquidez_variaveis.disponibilidades;
        this.estoques = this.liquidez_variaveis.estoques;
        this.imobilizado = this.liquidez_variaveis.imobilizado;
        this.obrigacoes_a_longo_prazo = this.liquidez_variaveis.obrigacoes_a_longo_prazo;
        this.passivo_circulante = this.liquidez_variaveis.passivo_circulante;
        this.passivo_nao_circulante = this.liquidez_variaveis.passivo_nao_circulante;
        this.patrimonio_liquido = this.liquidez_variaveis.patrimonio_liquido;
        this.realizavel_a_longo_prazo = this.liquidez_variaveis.realizavel_a_longo_prazo;
    }
}

const liquidez = new BalancoAnterior(balanco_anterior);

