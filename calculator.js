const numbers = document.querySelectorAll(".numberpad");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

let currentNumber = "";
let previousNumber = "";
let operator = "";

const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a*b;
};

const divide = function (a,b) {
    return a/b;
};

function operate (a,b) {
    if (operator === "add") {
        return add(a,b);
    } else if (operator === "subtract") {
        return subtract(a,b);
    } else if (operator === "multiply") {
        return multiply(a,b);
    } else if (operator === "divide") {
        return divide(a,b);
    }
}

function getNumber(e) {
    currentNumber += e.target.textContent;
    display.textContent = currentNumber;
}

function getOperator(e) {
    operator = e.target.id;
    previousNumber = currentNumber;
    currentNumber = "";
};

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.textContent = "";
};

numbers.forEach(button => {
    button.addEventListener("click", getNumber);
});

operators.forEach(button => {
    button.addEventListener("click", getOperator);
});

clear.addEventListener("click", clearDisplay);