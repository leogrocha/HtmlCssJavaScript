const pessoa = [
    pf = [
        {id: 1, nome: 'João', cpf: '12345678901'},
        {id: 2, nome: 'Maria', cpf: '12345678902'},
        {id: 3, nome: 'Pedro', cpf: '12345678903'},
        {id: 4, nome: 'José', cpf: '12345678904'},
        {id: 5, nome: 'Ana', cpf: '12345678905'},
    ],

    pj = [
        {id: 1, nome: 'Empresa 1', cnpj: '12345678901'},
        {id: 2, nome: 'Empresa 2', cnpj: '12345678902'},
        {id: 3, nome: 'Empresa 3', cnpj: '12345678903'},
        {id: 4, nome: 'Empresa 4', cnpj: '12345678904'},
        {id: 5, nome: 'Empresa 5', cnpj: '12345678905'},
    ]
]

class Pessoa {
    constructor(pessoa) {
        this.pf = pessoa[0];
        this.pj = pessoa[1];
    }
}



function get_table_1() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const pessoa_fisica = new Pessoa(pessoa);

    document.getElementById('table_1').appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    const tr = document.createElement('tr');
    const th_1 = document.createElement('th');
    th_1.innerHTML = 'ID';
    const th_2 = document.createElement('th');
    th_2.innerHTML = 'Nome';
    const th_3 = document.createElement('th');
    th_3.innerHTML = 'CPF';

    tr.appendChild(th_1);
    tr.appendChild(th_2);
    tr.appendChild(th_3);
    thead.appendChild(tr);

    console.log(pessoa_fisica);
    console.log(pessoa_fisica.pf);
    console.log(pessoa_fisica.pj);


    for(let i = 0; i < pessoa_fisica.pf.length; i++) {
        const tr = document.createElement('tr');
        const td_id = document.createElement('td');
        td_id.innerHTML = pessoa_fisica.pf[i].id;
        const td_nome = document.createElement('td');
        td_nome.innerHTML = pessoa_fisica.pf[i].nome;
        const td_cpf = document.createElement('td');
        td_cpf.innerHTML = pessoa_fisica.pf[i].cpf;
        tr.appendChild(td_id);
        tr.appendChild(td_nome);
        tr.appendChild(td_cpf);

        tbody.appendChild(tr);
    }
}

get_table_1();

function get_table_2() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const pessoa_juridica = new Pessoa(pessoa);

    document.getElementById('table_2').appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    const tr = document.createElement('tr');
    const th_1 = document.createElement('th');
    th_1.innerHTML = 'ID';
    const th_2 = document.createElement('th');
    th_2.innerHTML = 'Nome';
    const th_3 = document.createElement('th');
    th_3.innerHTML = 'CNPJ';

    tr.appendChild(th_1);
    tr.appendChild(th_2);
    tr.appendChild(th_3);
    thead.appendChild(tr);

    for(let i = 0; i < pessoa_juridica.pj.length; i++) {
        const tr = document.createElement('tr');
        const td_id = document.createElement('td');
        td_id.innerHTML = pessoa_juridica.pj[i].id;
        const td_nome = document.createElement('td');
        td_nome.innerHTML = pessoa_juridica.pj[i].nome;
        const td_cnpj = document.createElement('td');
        td_cnpj.innerHTML = pessoa_juridica.pj[i].cnpj;
        tr.appendChild(td_id);
        tr.appendChild(td_nome);
        tr.appendChild(td_cnpj);

        tbody.appendChild(tr);
    }
}

get_table_2();