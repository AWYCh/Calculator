const numbers = document.querySelectorAll(".numberpad");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

display.textContent = 0;

const firstNumber = function getFirstNumber() {

};

const secondNumber = function getSecondNumber() {

};

const operator = function getOperator() {

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

function getNumber(e) {
    display.textContent = e.target.id;
}

function clearDisplay() {
    display.textContent = 0;
};

numbers.forEach(button => {
    button.addEventListener("click", getNumber);
});

clear.addEventListener("click", clearDisplay);