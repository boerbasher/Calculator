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

let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


const screen = document.querySelector('#displayNums')

function updateDisplay() {
    screen.appendChild(document.createTextNode(nums[3]));
}