function find_sum(my_array) {
    let sum = 0;
    for(let item of my_array){
        sum += item;
    }

    return sum;
}

console.log(find_sum([1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));