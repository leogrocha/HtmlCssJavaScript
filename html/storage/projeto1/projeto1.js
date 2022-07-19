// Inserir dado na LocalStorage
localStorage.setItem('name', 'Leonardo Rocha');

// Resgatar item
const nome = localStorage.getItem("name");
console.log(nome);

// Resgatando item que não existe
const lastName = localStorage.getItem("lastname");
console.log(lastName);
if(!lastName){
    console.log("Sem sobrenome");
}

// Remover item
localStorage.removeItem("name");
localStorage.removeItem("logado");


// Limpar todos os itens
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);
console.log(typeof localStorage.getItem("a")); // String =>  Sempre vai salvar o dado como String
localStorage.clear();


// Session Storage
//sessionStorage.setItem("number", 123); //quando fecha a aba é excluído

const n = sessionStorage.getItem('number');
console.log(n);

// Salvando objeto
const person = {
    name: 'Leonardo',
    age: 24,
    job: 'Develpment'
}

localStorage.setItem("person", JSON.stringify(person));
sessionStorage.setItem("person", JSON.stringify(person));

// Pegando o objeto do sessionStorage
const getPerson = localStorage.getItem("person");
const personObject = JSON.parse(getPerson);

console.log(personObject);


