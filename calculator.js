const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const stored = document.querySelector("#stored");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");

let currentNumber = "";
let previousNumber = "";
let operator = "";

function roundNumber(num) {
    return Math.round(num*1000000000)/1000000000;
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

    if (operator === "+") {
        currentNumber = add(a,b);
    } else if (operator === "-") {
        currentNumber = subtract(a,b);
    } else if (operator === "x") {
        currentNumber = multiply(a,b);
    } else if (operator === "/") {
        if (b === 0) {
            currentNumber = "MissingNo";
            display.textContent = currentNumber;
            operator = "";
            return;
        } else {
            currentNumber = divide(a,b);
    }};
    operator = "";
    display.textContent = roundNumber(currentNumber);
    stored.textContent += " " + b + " " + "=";
};

function getNumber(number) {
    if (operator == "" && currentNumber !== "" && previousNumber !== "") {
        clearDisplay()
    };
    if (currentNumber.length <= 15) {
    currentNumber += number;
    display.textContent = currentNumber;
    }
};

function getOperator(op) {
    if (currentNumber == "") {
        currentNumber = 0
    } else if (operator !== "") {
        operate(previousNumber, currentNumber)
    };
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";
    stored.textContent = previousNumber + " " + operator;
};

function getDecimal () {
    if (!currentNumber.includes(".")) {
        if (currentNumber == "") {
            currentNumber = 0
        };
        currentNumber += ".";
        display.textContent = currentNumber;
    }
};

function undo() {
    if (currentNumber !== "") {
        currentNumber = currentNumber.slice(0,-1);
        display.textContent = currentNumber;
    }
};

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.textContent = "";
    stored.textContent = "";
};

function getKey(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        getNumber(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
        getOperator(e.key);
    } else if (e.key === "*") {
        getOperator("x");
    } else if ((e.key === "=" && currentNumber !== "" && previousNumber !== "" && operator !== "")|| 
                (e.key === "Enter" && currentNumber !== "" && previousNumber !== "" && operator !== "")) {
        operate(previousNumber, currentNumber);
    } else if (e.key === ".") {
        getDecimal();
    } else if (e.key === "Backspace") {
        undo();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
};

numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        getNumber(e.target.textContent)});
});

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        getOperator(e.target.textContent)});
});

decimal.addEventListener("click", getDecimal);

equals.addEventListener("click", () => {
    if (currentNumber !== "" && previousNumber !== "" && operator !== "") {
    operate(previousNumber, currentNumber)}});

backspace.addEventListener("click", undo);

clear.addEventListener("click", clearDisplay);

document.addEventListener("keydown", getKey);