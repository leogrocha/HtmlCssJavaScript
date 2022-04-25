const boavista = [
    {
        "consultas": {
            "periodo": [
                {
                    "Quantidade": 1.0,
                    "mes": "11-2021"
                },
                {
                    "Quantidade": 7.0,
                    "mes": "10-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "9-2021"
                },
                {
                    "Quantidade": 1.0,
                    "mes": "8-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "7-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "6-2021"
                },
                {
                    "Quantidade": 2.0,
                    "mes": "5-2021"
                },
                {
                    "Quantidade": 1.0,
                    "mes": "4-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "3-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "2-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "1-2021"
                },
                {
                    "Quantidade": 0.0,
                    "mes": "12-2020"
                },
                {
                    "Quantidade": 4.0,
                    "mes": "11-2020"
                }
            ],
            "quantidade": 16
        },
        "descricao": {
            "cheques_devolvidos_informados_usuario": {
                "situacao": "bom",
                "total": "Nada consta"
            },
            "cheques_sem_fundo": {
                "situacao": "bom",
                "total": "Nada consta"
            },
            "cheques_sustados": {
                "situacao": "bom",
                "total": "Nada consta"
            },
            "pendencias_restricoes": {
                "situacao": "bom",
                "total": "Nada consta"
            },
            "protestos": {
                "situacao": "bom",
                "total": "Nada consta"
            }
        },
        "score": {
            "probabilidade": 6.5,
            "score": 919,
            "texto": "De cada 100 empresas classificadas nesta classe de score, é provável que 6 apresentem débitos no mercado nos próximos 12 meses."
        },
        "tipo": "defineRisco"
    },
];

class BoaVistaPJ {
    constructor(boavista){
        this.score = boavista[0].score.score;
        this.texto = boavista[0].score.texto;
    }
}

const boavistaPJ = new BoaVistaPJ(boavista);
console.log(boavistaPJ);
console.log(boavistaPJ.texto);

