import dre_anterior from "./model/dre_anterior.js";
import dre from "./model/dre.js";
import balanco_anterior from "./model/balanco_anterior.js";
import liquidez_balanco from "./model/liquidez_balanco.js";
import json_dre_anterior from './dre_anterior.js'
import json_dre from './dre.js'
import json_balanco_anterior from './balanco_anterior.js'
import json_liquidez_balanco from './liquidez_balanco.js'


function get_situacao(json_dre) {
    const class_dre = new dre(json_dre);
    const situacao = document.getElementById('situacao');
    situacao.innerHTML = class_dre.lucratividade.situacao;
    const indice = document.getElementById('indice');
    indice.innerHTML = class_dre.lucratividade.indice;
}

get_situacao(json_dre);




