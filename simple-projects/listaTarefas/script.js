const input = document.getElementById('input');
const btn = document.getElementById('input_submit');
const item_list = document.querySelector('.item-list');

btn.addEventListener('click', function() {
    const text = input.value;
    const item = document.createElement('li');
    item.textContent = text;
    item_list.appendChild(item);
    input.value = '';
});