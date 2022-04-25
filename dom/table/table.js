let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('showtable').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = 'Sr. No.';
let heading_2 = document.createElement('th');
heading_2.innerHTML = 'Name';
let heading_3 = document.createElement('th');
heading_3.innerHTML = 'Company';

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = '1';
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = 'John';
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = 'Doe';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = '2';
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = 'Jane';
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = 'Doe';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);