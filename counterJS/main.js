let count = 0;

let countContent = document.getElementById('count');
let countAddButton = document.getElementById('addButton');
let countSubtractButton = document.getElementById('subtractButton');

countContent.innerText = count;

countAddButton.addEventListener('click', () => {
    count++;
    countContent.innerText = count;
});

countSubtractButton.addEventListener('click', () => {
    if(count > 0) {
        count--;
        countContent.innerText = count;
    }
});