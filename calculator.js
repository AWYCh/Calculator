const numbers = document.querySelectorAll(".numberpad");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const stored = document.querySelector("#stored");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

let currentNumber = "";
let previousNumber = "";
let operator = "";

function roundNumber(num) {
    return Math.round(num*10000000)/10000000;
};

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
    a = Number(a);
    b = Number(b);

    if (operator === "add") {
        currentNumber = add(a,b);
    } else if (operator === "subtract") {
        currentNumber = subtract(a,b);
    } else if (operator === "multiply") {
        currentNumber = multiply(a,b);
    } else if (operator === "divide") {
        if (b === 0) {
            currentNumber = "MissingNo";
            display.textContent = currentNumber;
            return;
        } else {
            currentNumber = divide(a,b);
    }};
    operator = "";
    display.textContent = roundNumber(currentNumber);
    stored.textContent += " " + b + " " + "=";
};

function getNumber(e) {
    if (operator == "" && currentNumber !== "" && previousNumber !== "") {
        clearDisplay()
    };
    if (currentNumber.length <= 15) {
    currentNumber += e.target.textContent;
    display.textContent = currentNumber;
    }};

function getOperator(e) {
    if (currentNumber == "") {
        currentNumber = 0
    } else if (operator !== "") {
        operate(previousNumber, currentNumber)
    };
    operator = e.target.id;
    previousNumber = currentNumber;
    currentNumber = "";
    stored.textContent = previousNumber + " " + e.target.textContent;
};

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.textContent = "";
    stored.textContent = "";
};

numbers.forEach(button => {
    button.addEventListener("click", getNumber);
});

operators.forEach(button => {
    button.addEventListener("click", getOperator);
});

equals.addEventListener("click", function () {
    if (currentNumber !== "" && previousNumber !== "" && operator !== "") {
    operate(previousNumber, currentNumber)}});

clear.addEventListener("click", clearDisplay);