const find_common_elements = (list1, list2) => {
    let result = [];

    for(let i = 0; i < list1.length; i++){
        for(let j = 0; j < list2.length; j++){
            if(list1[i] === list2[j]){
                result.push(list1[i]);
            }
        }
    }

    return result;
}

console.log(find_common_elements([1,2,3,4,5,6], [1,2,3,4,5]));