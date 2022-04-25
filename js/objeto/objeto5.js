const liquidez_balanco = [
    liquidez_variaveis = {
        "ativo": [
            1301904.37,
            3579042.96,
            9688509.75,
            9696366.76
        ],
        "ativo_circulante": [
            1269279.08,
            3547132.09,
            9657113.3,
            9665684.73
        ],
        "ativo_nao_circulante": [
            32625.29,
            31910.87,
            31396.45,
            30682.03
        ],
        "disponibilidades": [
            321980.35,
            382766.01,
            5110801.13,
            2478593.14
        ],
        "estoques": [
            0.0,
            0.0,
            0.0,
            0.0
        ],
        "imobilizado": [
            27405.29,
            26690.87,
            25976.45,
            25262.03
        ],
        "obrigacoes_a_longo_prazo": [
            1190000.66,
            1190000.66,
            1190000.66,
            1190000.66
        ],
        "passivo_circulante": [
            466929.82,
            2891623.76,
            9136655.24,
            9313289.03
        ],
        "passivo_nao_circulante": [
            1190000.66,
            1190000.66,
            1190000.66,
            1190000.66
        ],
        "patrimonio_liquido": [
            355026.11,
            502581.46,
            638146.15,
            806922.93
        ],
        "realizavel_a_longo_prazo": [
            0.0,
            0.0,
            0.0,
            0.0
        ]
    },

    liquidez_variaveis = {
        "ativo": [
            1301904.37,
            3579042.96,
            9688509.75,
            9696366.76
        ],
        "ativo_circulante": [
            1269279.08,
            3547132.09,
            9657113.3,
            9665684.73
        ],
        "ativo_nao_circulante": [
            32625.29,
            31910.87,
            31396.45,
            30682.03
        ],
        "disponibilidades": [
            321980.35,
            382766.01,
            5110801.13,
            2478593.14
        ],
        "estoques": [
            0.0,
            0.0,
            0.0,
            0.0
        ],
        "imobilizado": [
            27405.29,
            26690.87,
            25976.45,
            25262.03
        ],
        "obrigacoes_a_longo_prazo": [
            1190000.66,
            1190000.66,
            1190000.66,
            1190000.66
        ],
        "passivo_circulante": [
            466929.82,
            2891623.76,
            9136655.24,
            9313289.03
        ],
        "passivo_nao_circulante": [
            1190000.66,
            1190000.66,
            1190000.66,
            1190000.66
        ],
        "patrimonio_liquido": [
            355026.11,
            502581.46,
            638146.15,
            806922.93
        ],
        "realizavel_a_longo_prazo": [
            10.0,
            20.0,
            30.0,
            40.0
        ]
    },

]

class Liquidez {
    constructor(liquidez_balanco){

        console.log(liquidez_balanco.length);
        
        for(let i = 0; i < liquidez_balanco.length; i++){
            this.liquidez_balanco = liquidez_balanco[i];
            
        }
    }
}

const newLiquidez = new Liquidez(liquidez_balanco);
console.log(newLiquidez);