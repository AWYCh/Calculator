const numbers = document.querySelectorAll(".numberpad");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

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
        currentNumber = add(a,b);
    } else if (operator === "subtract") {
        currentNumber = subtract(a,b);
    } else if (operator === "multiply") {
        currentNumber = multiply(a,b);
    } else if (operator === "divide") {
        currentNumber = divide(a,b);
    }
    display.textContent = currentNumber;
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

equals.addEventListener("click", function () {
    operate(previousNumber, currentNumber)});

clear.addEventListener("click", clearDisplay);