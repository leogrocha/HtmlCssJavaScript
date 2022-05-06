const sum = (nums) => {
    let sum = 0;
    for(let num of nums){
        sum += num;
    }

    return sum;
}

console.log(sum([1,2,3,4,5])); //15

const array = [10,9,8,7,6,5,4,3,2,1];
array.sort((a,b) => a-b);
console.log(array);


const items = [1,2,3,4,5];

items.push(6);
console.log(items); //[ 1, 2, 3, 4, 5, 6 ]

const min = Math.min(...items);
console.log(min);//1
const max = Math.max(...items);
console.log(max);//6

let a = [1,2,3,4,5];
let b = a;

b.push(10);
console.log(a); //[ 1, 2, 3, 4, 5, 10 ]
console.log(b); //[ 1, 2, 3, 4, 5, 10 ]


let temp_1 = a[1];
let temp_2 = a[2];
a[1] = temp_2;
a[2] = temp_1;
console.log(a); // [ 1, 3, 2, 4, 5, 10 ]
