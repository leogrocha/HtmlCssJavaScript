const dre_anterior = [
    {
        "liquidez_variaveis": {
            "receita_bruta": [
                6039.39,
                52246.16,
                170600.96,
                196801.16
            ],
            "resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral": [
                -186267.33,
                -143530.26,
                -122441.0,
                -153364.81
            ]
        }
    }
];

class DreAnterior {
    constructor(dre){
        for(let i = 0; i < dre.length; i++){
            this.liquidez_variaveis = dre[i].liquidez_variaveis;
            this.receita_bruta = this.liquidez_variaveis.receita_bruta;
            this.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral = this.liquidez_variaveis.resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral;
        }
    }
}

const indices_dre_table = ['receita_bruta', 'resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral'];

const dre = new DreAnterior(dre_anterior);
console.log(dre);

for(let i = 0; i < indices_dre_table.length; i++){
    console.log(dre.liquidez_variaveis[indices_dre_table[i]]);
    for(let j = 0; j < 4; j++){
        console.log(dre.liquidez_variaveis[indices_dre_table[i]][j]);
    }
}