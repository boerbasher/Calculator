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
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }   
}

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

equalsBtn.addEventListener('click', () => makeAnswer(screen.textContent))

function addNumber(num) {
    screen.textContent += num
}

function addOperator(op) {
    if (screen.textContent.length >= 5) {
        makeAnswer(screen.textContent)
    }
    screen.textContent += op
}

function clearScreen() {
    screen.textContent = ''
}

function makeAnswer() {
    ls = screen.textContent;
    ls = ls.split(" ");
    screen.textContent = operate(ls[1], parseInt(ls[0]), parseInt(ls[2]))
    console.log(ls)
}
