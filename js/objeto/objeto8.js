const irpf = [
    {
        "agronegocio": {
            "apuracao": {
                "despesas_custeio_investimento": 13765677.19,
                "receita_bruta": 15155828.86,
                "resultado": 1390151.67,
                "situacao": "bom"
            }
        },
        "bens_dividas": {
            "bens_direitos": {
                "Bens e direitos em 31/12/2019": 113447.58,
                "Bens e direitos em 31/12/2020": 150112.17,
                "situacao": "bom"
            },
            "dividas_onus": {
                "Dívidas e ônus reais em 31/12/2019": 0.0,
                "Dívidas e ônus reais em 31/12/2020": 0.0,
                "situacao": "bom"
            }
        },
        "dados_endereco": {
            "bairro": "GREENVILLE",
            "celular": "(66) 99668-2707",
            "cep": "78840-000",
            "complemento": "QUADRA 11 - LOTE 04",
            "email": "nan",
            "endereco": "RUA SAO PEDRO DA CIPA",
            "fone": "nan",
            "municipio": "CAMPO VERDE",
            "numero": "398",
            "uf": "MT"
        },
        "dados_pessoais": {
            "cpf": "052.263.781-73",
            "nome": "JOAO PAULO FERREIRA CICILIATO"
        },
        "exercicio": "EXERCÍCIO 2021 - ANO-CALENDÁRIO 2020",
        "rendimentos_nao_tributaveis": {
            "total": 537.41
        },
        "rendimentos_tributaveis": {
            "total": 1390396.78
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
console.log(class_irpf);
console.log(class_irpf.apuracao);

console.log(class_irpf.bens_dividas);

console.log(class_irpf.exercicio);