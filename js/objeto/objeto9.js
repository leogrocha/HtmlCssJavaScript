const irpf = [
    {
        "agronegocio": {
            "apuracao": {
                "despesas_custeio_investimento": 0.0,
                "receita_bruta": 0.0,
                "resultado": 0.0,
                "situacao": "bom"
            }
        },
        "bens_dividas": {
            "bens_direitos": {
                "bens_e_direitos_anterior": 3733181.87,
                "bens_e_direitos_corrente": 4777368.43,
                "situacao": "bom"
            },
            "dividas_onus": {
                "dividas_e_onus_reais_anterior": 0.0,
                "dividas_e_onus_reais_corrente": 0.0,
                "situacao": "bom"
            }
        },
        "dados_endereco": {
            "bairro": "CAMPO BELO",
            "celular": "nan",
            "cep": "04619-000",
            "complemento": "APTO 232",
            "email": "nan",
            "endereco": "RUA GABRIELE D ANNUNZIO",
            "fone": "nan",
            "municipio": "SÃO PAULO",
            "numero": "1096",
            "uf": "SP"
        },
        "dados_pessoais": {
            "cpf": "642.036.201-63",
            "nome": "YUSLEY FERREIRA NETO JUNIOR"
        },
        "exercicio": "EXERCÍCIO 2021 - ANO-CALENDÁRIO 2020",
        "movimentacao_rebanho": "Sem Informações",
        "rendimentos_nao_tributaveis": {
            "total": 3048070.47
        },
        "rendimentos_tributaveis": {
            "total": 55386.0
        },
        "tipo": "completo"
    }
];

class Irpf{
    constructor(irpf) {
        this.movimentacao_rebanho = irpf[0].movimentacao_rebanho;
    }
}

const class_irpf = new Irpf(irpf);
console.log(class_irpf.movimentacao_rebanho);
console.log(typeof(class_irpf.movimentacao_rebanho));