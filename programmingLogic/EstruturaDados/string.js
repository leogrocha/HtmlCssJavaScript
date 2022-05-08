// Declaração
let s = 'Minha primeira string';
console.log(s); //Minha primeria string

let string = 'javascript';
console.log(string.replace('script', '')); //java

let bigger = 'javascript';
console.log(bigger.toUpperCase()); //JAVASCRIPT

let smaller = 'JAVASCRIPT';
console.log(smaller.toLowerCase()); //javascript

// Verificar se a string começa com os caracteres especificados
let startswith = 'javascript';
console.log(startswith.startsWith('java')); //true
console.log(startswith.startsWith('j')); // true
console.log(startswith.startsWith('js')); // false

// Verificar se a string termina com os caracteres especificados
let endswith = 'javascript';
console.log(endswith.endsWith('script')); //true
console.log(endswith.endsWith('sc')); // false

let separar = 'teste1, teste2, teste3';
console.log(separar.split(',')); // ['teste1', ' teste2', ' teste3']

let tirar_espacos = '   teste   ';
console.log(tirar_espacos.trim()); // teste

let sub = '0123456789';
console.log(sub.substring(2, 5)); // 2345






