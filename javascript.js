// Calculation functions

function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }   
}

let ls = ''

let tot = 0

const screen = document.getElementById('screen');

const btn = document.querySelectorAll('.number');

const opBtn = document.querySelectorAll('.operator');

const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', clearScreen);

const equalsBtn = document.getElementById('equals');

btn.forEach((button) =>
  button.addEventListener('click', () => addNumber(button.textContent))
)

opBtn.forEach((button) =>
  button.addEventListener('click', () => addOperator(button.textContent))
)

equalsBtn.addEventListener('click', () => makeList(screen.textContent))

function addNumber(num) {
    screen.textContent += num
}

function addOperator(op) {
    screen.textContent += op
}

function clearScreen() {
    screen.textContent = ''
}

function makeList() {
    ls = screen.textContent;
    ls = ls.split(" ");
    ls = ls.splice();
    screen.textContent = '';
    console.log(ls)
}