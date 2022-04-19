// function myFunction() {
//     const node = document.createElement("li");
//     const textnode = document.createTextNode("Water");

//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }

const row = document.createElement("td");
const newRow = document.createElement("tr");
const table = document.createElement("table");

const numbers = [1,2,3, 4, 5, 6, 7, 8, 9, 10];

document.createTextNode(newRow);

for(let i = 0; i < numbers.length; i++) {
    const node = document.createTextNode(numbers[i]);
    row.appendChild(node);
    document.querySelector('table').appendChild(node);
    console.log(node);
}