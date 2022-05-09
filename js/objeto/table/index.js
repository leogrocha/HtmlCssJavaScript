import dre_anterior from "./model/dre_anterior.js";
import dre from "./model/dre.js";
import balanco_anterior from "./model/balanco_anterior.js";
import liquidez_balanco from "./model/liquidez_balanco.js";
import json_dre_anterior from './dre_anterior.js'
import json_dre from './dre.js'
import json_balanco_anterior from './balanco_anterior.js'
import json_liquidez_balanco from './liquidez_balanco.js'


function get_table(json_balanco_anterior, json_dre_anterior, json_dre, json_liquidez_balanco) {
    const indices_balanco_anterior = new liquidez_balanco(json_balanco_anterior);
    const indices_dre_anterior = new dre_anterior(json_dre_anterior);
    const indices_dre_atual = new dre(json_dre);
    const indices_balanco_atual = new liquidez_balanco(json_liquidez_balanco);
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    const indices_table = ['ativo', 'ativo_circulante', 'ativo_nao_circulante', 'disponibilidades', 'estoques', 'imobilizado',
        'obrigacoes_a_longo_prazo', 'passivo_circulante', 'passivo_nao_circulante', 'patrimonio_liquido', 'realizavel_a_longo_prazo'];
    const indices_dre_table = ['receita_bruta', 'resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral'];

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('table').appendChild(table);

    let row = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = '';

    row.appendChild(heading_1);

    for (let i = 0; i < 2; i++) {
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = 'Jan/Mar';
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = 'Abr/Jun';
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = 'Jul/Set';
        let heading_5 = document.createElement('th');
        heading_5.innerHTML = 'Out/Dez';
        row.appendChild(heading_2);
        row.appendChild(heading_3);
        row.appendChild(heading_4);
        row.appendChild(heading_5);
    }

    thead.appendChild(row);

    for (let linha = 0; linha < indices_table.length; linha++) {
        const row_1 = document.createElement('tr');
        let cell_1 = document.createElement('td');

        cell_1.innerHTML = indices_table[linha];
        if (indices_table[linha] === 'ativo')
            cell_1.innerHTML = 'Ativo';
        else if (indices_table[linha] === 'ativo_circulante')
            cell_1.innerHTML = 'Ativo Circulante';
        else if (indices_table[linha] === 'ativo_nao_circulante')
            cell_1.innerHTML = 'Ativo Não Circulante';
        else if (indices_table[linha] === 'disponibilidades')
            cell_1.innerHTML = 'Disponibilidades';
        else if (indices_table[linha] === 'estoques')
            cell_1.innerHTML = 'Estoques';
        else if (indices_table[linha] === 'imobilizado')
            cell_1.innerHTML = 'Imobilizado';
        else if (indices_table[linha] === 'obrigacoes_a_longo_prazo')
            cell_1.innerHTML = 'Obrigações a Longo Prazo';
        else if (indices_table[linha] === 'passivo_circulante')
            cell_1.innerHTML = 'Passivo Circulante';
        else if (indices_table[linha] === 'passivo_nao_circulante')
            cell_1.innerHTML = 'Passivo Não Circulante';
        else if (indices_table[linha] === 'patrimonio_liquido')
            cell_1.innerHTML = 'Patrimônio Líquido';
        else if (indices_table[linha] === 'realizavel_a_longo_prazo')
            cell_1.innerHTML = 'Realizavel a Longo Prazo';
        row_1.appendChild(cell_1);

        for (let coluna = 0; coluna < 1; coluna++) {

            const balanco_anterior_0 = document.createElement('td');
            const balanco_anterior_1 = document.createElement('td');
            const balanco_anterior_2 = document.createElement('td');
            const balanco_anterior_3 = document.createElement('td');
            balanco_anterior_0.innerHTML = indices_balanco_anterior.liquidez_variaveis[indices_table[linha]][0].T01;
            balanco_anterior_1.innerHTML = indices_balanco_anterior.liquidez_variaveis[indices_table[linha]][1].T02;
            balanco_anterior_2.innerHTML = indices_balanco_anterior.liquidez_variaveis[indices_table[linha]][2].T03;
            balanco_anterior_3.innerHTML = indices_balanco_anterior.liquidez_variaveis[indices_table[linha]][3].T04;

            row_1.appendChild(balanco_anterior_0);
            row_1.appendChild(balanco_anterior_1);
            row_1.appendChild(balanco_anterior_2);
            row_1.appendChild(balanco_anterior_3);

            const balanco_atual_0 = document.createElement('td');
            const balanco_atual_1 = document.createElement('td');
            const balanco_atual_2 = document.createElement('td');
            const balanco_atual_3 = document.createElement('td');
            balanco_atual_0.innerHTML = indices_balanco_atual.liquidez_variaveis[indices_table[linha]][0].T01;
            balanco_atual_1.innerHTML = indices_balanco_atual.liquidez_variaveis[indices_table[linha]][1].T02;
            balanco_atual_2.innerHTML = indices_balanco_atual.liquidez_variaveis[indices_table[linha]][2].T03;
            balanco_atual_3.innerHTML = indices_balanco_atual.liquidez_variaveis[indices_table[linha]][3].T04;

            row_1.appendChild(balanco_atual_0);
            row_1.appendChild(balanco_atual_1);
            row_1.appendChild(balanco_atual_2);
            row_1.appendChild(balanco_atual_3);
        }
        tbody.appendChild(row_1);

        console.log(indices_balanco_anterior.liquidez_variaveis.ativo[0]);


    }

    for(let linha = 0; linha < indices_dre_table.length; linha++){
        const row_2 = document.createElement('tr');
        let cell_2 = document.createElement('td');

        cell_2.innerHTML = indices_dre_table[linha];
        if (indices_dre_table[linha] === 'receita_bruta')
            cell_2.innerHTML = 'Faturamento';
        if (indices_dre_table[linha] === 'resultado_liquido_do_periodo_antes_do_irpj_e_da_csll_atividade_geral')
            cell_2.innerHTML = 'Lucro Líquido';
        row_2.appendChild(cell_2); 
        
        for(let coluna = 0; coluna < 1; coluna++) {
            const dre_anterior_0 = document.createElement('td');
            const dre_anterior_1 = document.createElement('td');
            const dre_anterior_2 = document.createElement('td');
            const dre_anterior_3 = document.createElement('td');
            dre_anterior_0.innerHTML = indices_dre_anterior.liquidez_variaveis[indices_dre_table[linha]][0].T01;
            dre_anterior_1.innerHTML = indices_dre_anterior.liquidez_variaveis[indices_dre_table[linha]][1].T02;
            dre_anterior_2.innerHTML = indices_dre_anterior.liquidez_variaveis[indices_dre_table[linha]][2].T03;
            dre_anterior_3.innerHTML = indices_dre_anterior.liquidez_variaveis[indices_dre_table[linha]][3].T04;

            

            row_2.appendChild(dre_anterior_0);
            row_2.appendChild(dre_anterior_1);
            row_2.appendChild(dre_anterior_2);
            row_2.appendChild(dre_anterior_3);

            const dre_atual_0 = document.createElement('td');
            const dre_atual_1 = document.createElement('td');
            const dre_atual_2 = document.createElement('td');
            const dre_atual_3 = document.createElement('td');
            dre_atual_0.innerHTML = indices_dre_atual.liquidez_variaveis[indices_dre_table[linha]][0].T01;
            dre_atual_1.innerHTML = indices_dre_atual.liquidez_variaveis[indices_dre_table[linha]][1].T02;
            dre_atual_2.innerHTML = indices_dre_atual.liquidez_variaveis[indices_dre_table[linha]][2].T03;
            dre_atual_3.innerHTML = indices_dre_atual.liquidez_variaveis[indices_dre_table[linha]][3].T04;

            row_2.appendChild(dre_atual_0);
            row_2.appendChild(dre_atual_1);
            row_2.appendChild(dre_atual_2);
            row_2.appendChild(dre_atual_3);
        }

        tbody.appendChild(row_2);

    }

}

get_table(json_balanco_anterior, json_dre_anterior, json_dre, json_liquidez_balanco);






