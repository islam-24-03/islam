const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const del = document.getElementById('del');
const rav = document.getElementById('rav');
const result = document.getElementById('result');

plus.addEventListener('click', () => {
    const sum = parseInt(num1.value) + parseInt(num2.value);
    result.textContent = sum;
});

minus.addEventListener('click', () => {
    const difference = parseInt(num1.value) - parseInt(num2.value);
    result.textContent = difference;
});

del.addEventListener('click', () => {
    const quotient = parseInt(num1.value) / parseInt(num2.value);
    result.textContent = quotient;
});

rav.addEventListener('click', () => {
    const operator = document.querySelector('input[name="operator"]:checked').value;
    let answer;
    switch (operator) {
        case '+':
            answer = parseInt(num1.value) + parseInt(num2.value);
            break;
        case '-':
            answer = parseInt(num1.value) - parseInt(num2.value);
            break;
        case '/':
            answer = parseInt(num1.value) / parseInt(num2.value);
            break;
        default:
            answer = '';
            break;
    }
    result.textContent = otwet;
});