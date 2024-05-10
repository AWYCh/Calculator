const numbers = document.querySelectorAll(".numberpad");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const stored = document.querySelector("#stored");
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
        } else {
            currentNumber = divide(a,b);
    }}
    display.textContent = currentNumber;
    stored.textContent += " " + b + " " + "=";
}

function getNumber(e) {
    currentNumber += e.target.textContent;
    display.textContent = currentNumber;
}

function getOperator(e) {
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