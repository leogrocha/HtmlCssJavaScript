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
        }
    },]


class Liquidez {
    constructor(liquidez_balanco) {
        console.log(liquidez_balanco[0].liquidez_indices.indice_liquidez_corrente);
        this.liquidez_indices = liquidez_balanco.liquidez_indices;
        //this.liquidez_corrente = liquidez_balanco.liquidez_indices.indice_liquidez_corrente.situacao;
        
    }
}

const liquidez = new Liquidez(liquidez_balanco);
//console.log(liquidez.indice_liquidez_corrente.indice);

//console.log(liquidez);

// const result = liquidez_balanco.map((liquidez) => {
//     if(liquidez.indice_liquidez_corrente.situacao === 'atencao') {
//         return true;
//     }
// });
// console.log(result);

console.log(liquidez.liquidez_indices);