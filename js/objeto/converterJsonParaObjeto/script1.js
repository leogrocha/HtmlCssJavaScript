const json = '{"name": "Seu Madruga", "profissao": "Nenhuma", "idade": 98, "sexo": "Masculino", "cidade": "São Paulo", "estado": "SP", "pais": "Brasil"}';

const data = JSON.parse(json);
console.log(data.name);
console.log(data.idade);

