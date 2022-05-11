const irpf = [
    {
        "agronegocio": {
            "apuracao": {
                "despesas_custeio_investimento": 149450.0,
                "receita_bruta": 167060.0,
                "resultado": 17610.0,
                "situacao": "bom"
            }
        },
        "bens_dividas": {
            "bens_direitos": {
                "bens_e_direitos_anterior": 95000.0,
                "bens_e_direitos_corrente": 152380.87,
                "situacao": "bom"
            },
            "dividas_onus": {
                "dividas_e_onus_reais_anterior": 0.0,
                "dividas_e_onus_reais_corrente": 0.0,
                "situacao": "bom"
            }
        },
        "dados_endereco": {
            "bairro": "CENTRO",
            "celular": "nan",
            "cep": "49820-000",
            "complemento": "APT 2",
            "email": "nan",
            "endereco": "AVENIDA ANANIAS FERNANDES SANTOS",
            "fone": "nan",
            "municipio": "CANINDÉ DE SÃO FRANCISCO",
            "numero": "159",
            "uf": "SE"
        },
        "dados_pessoais": {
            "cpf": "609.962.005-25",
            "nome": "MAGNO JOSE DE MELO"
        },
        "exercicio": "EXERCÍCIO 2021 - ANO-CALENDÁRIO 2020",
        "movimentacao_rebanho": {
            "asininos": {
                "aquisicoes": 0.0,
                "consumo_perdas": 0.0,
                "estoque_final": 0.0,
                "estoque_inicial": 0.0,
                "nascimentos": 0.0,
                "vendas": 0.0
            },
            "bovinos": {
                "aquisicoes": 65.0,
                "consumo_perdas": 2.0,
                "estoque_final": 93.0,
                "estoque_inicial": 20.0,
                "nascimentos": 10.0,
                "vendas": 0.0
            },
            "caprinos": {
                "aquisicoes": 0.0,
                "consumo_perdas": 0.0,
                "estoque_final": 0.0,
                "estoque_inicial": 0.0,
                "nascimentos": 0.0,
                "vendas": 0.0
            },
            "outros": {
                "aquisicoes": 0.0,
                "consumo_perdas": 0.0,
                "estoque_final": 0.0,
                "estoque_inicial": 0.0,
                "nascimentos": 0.0,
                "vendas": 0.0
            },
            "suinos": {
                "aquisicoes": 0.0,
                "consumo_perdas": 0.0,
                "estoque_final": 0.0,
                "estoque_inicial": 0.0,
                "nascimentos": 0.0,
                "vendas": 0.0
            }
        },
        "rendimentos_nao_tributaveis": {
            "total": 0.0
        },
        "rendimentos_tributaveis": {
            "total": 60678.0
        },
        "tipo": "simplificado"
    }
];

class Irpf {
    constructor(irpf){
        this.agronegocio = irpf[0].agronegocio;
        this.apuracao = this.agronegocio.apuracao;

        this.bens_dividas = irpf[0].bens_dividas;
        this.bens_direitos = this.bens_dividas.bens_direitos;
        this.dividas_onus = this.bens_dividas.dividas_onus;

        this.dados_endereco = irpf[0].dados_endereco;
        this.dados_pessoais = irpf[0].dados_pessoais;

        this.rendimentos_tributaveis = irpf[0].rendimentos_tributaveis;
        this.rendimentos_nao_tributaveis = irpf[0].rendimentos_nao_tributaveis;

        this.exercicio = irpf[0].exercicio;
    }
}

const class_irpf = new Irpf(irpf);
console.log(class_irpf.dividas_onus.dividas_e_onus_reais_anterior);