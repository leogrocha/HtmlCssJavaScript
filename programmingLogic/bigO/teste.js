const array = [20,15,10,20,8,20,10];
let count = 0;

array.sort((a, b) => a - b);
console.log(array);

for(let i = 0; i < array.length; i++){
    if(array[i] === array[i+1]){
        count++;
    }
}

console.log(count); // 3

