const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}


const find_max = (my_array) => {
    let max = 0;
    for(let i = 0; i < my_array.length; i++){
        if(my_array[i] > max){
            max = my_array[i];
        }
    }

    return max;
}

console.log('Max: ' + find_max(array));