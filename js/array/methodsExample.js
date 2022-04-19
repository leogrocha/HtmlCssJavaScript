const array_push = [1,2,3];
array_push.push(4); // adicionar um novo elemento ao final do array
console.log(array_push); //[1,2,3,4]

const array_pop = [1,2,3];
array_pop.pop(); // remove o último elemento do array
console.log(array_pop); //[1,2]

const array_shift = [1,2,3];
array_shift.shift(); // remove o primeiro elemento do array
console.log(array_shift); //[2,3]

const array_unshift = [1,2,3];
array_unshift.unshift(0); // adiciona um novo elemento no inicio do array
console.log(array_unshift); //[0,1,2,3]

const array_concat = ['a','b'];
array_concat.concat('c'); // concatena um novo array ao final do array
console.log(array_concat); //['a','b','c']

const array_join = ['a','b','c'];
array_join.join('-'); // junta todos os elementos do array em uma string
console.log(array_join); //a-b-c

const array_slice = ['a','b','c', 'd', 'e'];
const teste_slice = array_slice.slice(1); // retorna um novo array a partir do elemento indicado
console.log(teste_slice); //[ 'b', 'c', 'd', 'e' ]

const array_indexOf = ['a','b','c', 'd', 'e'];
const verificateIndexOf = array_indexOf.indexOf('b'); //Verificar se o elemento existe no array e retorna o index, caso não exista retorna -1
const verificateIndexOf2 = array_indexOf.indexOf('f'); 
console.log(verificateIndexOf); // 1
console.log(verificateIndexOf2); // -1

const array_includes = ['a','b','c', 'd', 'e'];
const verificateIncludes = array_includes.includes('b'); //Verificar se o elemento existe no array e retorna true ou false
const verificateIncludes2 = array_includes.includes('f');
console.log(verificateIncludes); // true
console.log(verificateIncludes2); // false

const array_find = [3,5,6,8];
const verificateFind = array_find.find(element => element % 2 === 0); //Verificar se o elemento existe no array e retorna o elemento, caso não exista retorna undefined
console.log(verificateFind); // 6

const array_findIndex = [2,4,3,5];
array_findIndex.findIndex(n => n % 2 !== 0); //Verificar se o elemento existe no array e retorna o index, caso não exista retorna -1
console.log(array_findIndex); // 1

const array_map = [1,2,3];
const array_map2 = array_map.map(n => n * 2); //Retorna um novo array com os elementos do array multiplicados por 2
console.log(array_map2); // [2,4,6]

const array_filter = [1,4,7,8];
const array_filter2 = array_filter.filter(n => n % 2 === 0); //Retorna um novo array com os elementos do array que são divisiveis por 2
console.log(array_filter2); // [4,8]

const array_reduce = [1,2,3];
const array_reduce2 = array_reduce.reduce((acc, curr) => acc + curr); //Retorna um valor total do array
console.log(array_reduce2); // 6

const array_every = [1,2,3];
const array_every2 = array_every.every(n => n > 0); //Verificar se todos os elementos do array são maiores que 0
console.log(array_every2); // true

const array_some = [1,2,3];
const array_some2 = array_some.some(n => n > 0); //Verificar se algum elemento do array é maior que 0
console.log(array_some2); // true

const array_sort = [2,1,3];
const array_sort2 = array_sort.sort(); //Ordena o array
console.log(array_sort2); //[1,2,3]

const array_reverse = [1,2,3];
const array_reverse2 = array_reverse.reverse(); //Inverte o array
console.log(array_reverse2); //[3,2,1]

const array_at = [3,5,7,8];
const array_at2 = array_at.at(1); //Retorna o elemento do array na posição indicada
console.log(array_at2); // 5














