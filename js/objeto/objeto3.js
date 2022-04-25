const liquidez_balanco = [
    {
        "liquidez_indices": {
            "imobilizacao_patrimonio_social": {
                "indice": 0.04574443398294763,
                "situacao": "otimo"
            },
            "indice_endividamento_geral": {
                "indice": 1.094893817130752,
                "situacao": "atencao"
            },
            "indice_liquidez_corrente": {
                "indice": 1.106871705058769,
                "situacao": "atencao"
            },
            "indice_liquidez_geral": {
                "indice": 0.908564983149337,
                "situacao": "ruim"
            },
            "indice_liquidez_imediata": {
                "indice": 0.38031691531656775,
                "situacao": "pessimo"
            },
            "indice_liquidez_seca": {
                "indice": 1.106871705058769,
                "situacao": "atencao"
            },
            "indice_solvencia_geral": {
                "indice": 0.9133305753982354,
                "situacao": "atencao"
            },
            "participacao_capital_terceiros": {
                "indice": 11.538094369437413,
                "situacao": "otimo"
            }
        },
        "liquidez_variaveis": {
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
        }
    },
    {
        "liquidez_indices": {
            "imobilizacao_patrimonio_social": {
                "indice": 0.04574443398294763,
                "situacao": "otimo"
            },
            "indice_endividamento_geral": {
                "indice": 1.094893817130752,
                "situacao": "atencao"
            },
            "indice_liquidez_corrente": {
                "indice": 1.106871705058769,
                "situacao": "atencao"
            },
            "indice_liquidez_geral": {
                "indice": 0.908564983149337,
                "situacao": "ruim"
            },
            "indice_liquidez_imediata": {
                "indice": 0.38031691531656775,
                "situacao": "pessimo"
            },
            "indice_liquidez_seca": {
                "indice": 1.106871705058769,
                "situacao": "atencao"
            },
            "indice_solvencia_geral": {
                "indice": 0.9133305753982354,
                "situacao": "atencao"
            },
            "participacao_capital_terceiros": {
                "indice": 11.538094369437413,
                "situacao": "otimo"
            }
        },
        "liquidez_variaveis": {
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
        }
    }
]

class Table {
    constructor(liquidez_balanco) {
        this.liquidez_variaveis = liquidez_balanco[0].liquidez_variaveis;
        this.ativo = this.liquidez_variaveis.ativo;
    }
}

const data = new Table(liquidez_balanco);
console.log(data);

for(let i = 0; i < data.ativo.length; i++) {
    console.log(data.ativo[i]);
}

