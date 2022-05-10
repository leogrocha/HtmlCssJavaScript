const diferenca = 10;

const bens_direitos_anterior = document.getElementById('bens_direitos_anterior');
bens_direitos_anterior.style.width = '100px';
bens_direitos_anterior.style.height = '100px';
bens_direitos_anterior.style.backgroundColor = 'red';

const bens_direitos_atual = document.getElementById('bens_direitos_atual');
bens_direitos_atual.style.width = '100px';
bens_direitos_atual.style.height = `calc (10px + ${diferenca}px)`;
console.log(bens_direitos_atual);
//bens_direitos_atual.style.height = '100px';
bens_direitos_atual.style.backgroundColor = 'black';