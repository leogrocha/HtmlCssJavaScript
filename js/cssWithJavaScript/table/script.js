const bens_direitos_anterior = document.getElementById('bens_direitos_anterior');
const bens_direitos_atual = document.getElementById('bens_direitos_atual');

const bens_direitos_1 = 100;
const bens_direitos_2 = 50;
let porcentagem_diferenca = 0;
let diferenca = 0;

if (bens_direitos_1 > bens_direitos_2) {
    porcentagem_diferenca = ((bens_direitos_2 * 100) / bens_direitos_1);

    console.log(porcentagem_diferenca);
    bens_direitos_anterior.style.width = '100px';
    bens_direitos_anterior.style.height = '100px';
    bens_direitos_anterior.style.backgroundColor = 'red';

    bens_direitos_atual.style.width = '100px';
    bens_direitos_atual.style.height = `calc(${porcentagem_diferenca}px)`;
    bens_direitos_atual.style.backgroundColor = 'black';
    bens_direitos_atual.style.position = 'relative';
    bens_direitos_atual.style.top = `calc(75px - ${porcentagem_diferenca}px)`;
} else if (bens_direitos_2 > bens_direitos_1) {
    porcentagem_diferenca = ((bens_direitos_1 * 100) / bens_direitos_2);

    bens_direitos_anterior.style.width = '100px';
    bens_direitos_anterior.style.height = `calc(${porcentagem_diferenca}px)`;
    bens_direitos_anterior.style.backgroundColor = 'red';
    bens_direitos_anterior.style.position = 'relative';
    bens_direitos_anterior.style.top = `calc(75px - ${porcentagem_diferenca}px)`;
    console.log(porcentagem_diferenca);

    bens_direitos_atual.style.width = '100px';
    bens_direitos_atual.style.height = '100px';
    bens_direitos_atual.style.backgroundColor = 'black';
} else if (bens_direitos_1 === bens_direitos_2 && bens_direitos_1 != 0 && bens_direitos_2 != 0) {
    bens_direitos_anterior.style.width = '100px';
    bens_direitos_anterior.style.height = '100px';
    bens_direitos_anterior.style.backgroundColor = 'red';

    bens_direitos_atual.style.width = '100px';
    bens_direitos_atual.style.height = '100px';
    bens_direitos_atual.style.backgroundColor = 'black';
} else if (bens_direitos_1 === 0 && bens_direitos_2 === 0) {
    bens_direitos_anterior.style.width = '100px';
    bens_direitos_anterior.style.height = '1px';
    bens_direitos_anterior.style.backgroundColor = 'red';

    bens_direitos_atual.style.width = '100px';
    bens_direitos_atual.style.height = '1px';
    bens_direitos_atual.style.backgroundColor = 'black';
}

