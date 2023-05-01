// JavaScript code goes here

// console.log("Hello, World!")

// simple named function

function printAString() {
    console.log("Printed by this function!");
}

// scope

let globalNum = 0; // globally-scoped variable

function defineAVariable() {
    let funcVar = 4; // block-scoped variable

    console.log(funcVar);
}

if (true) {
    const condVar = 6; // block-scoped variable

    // console.log(condVar);
}

// named function with return statement

function returnAString() {
    const string = "This is a returnable string."

    return string;
}

const globalStr = returnAString();

// named function with parameters/arguments

function square(num) {
    let squaredNum = num * num;

    console.log(squaredNum);
}

// square(10);
// square(12);
// square(1);
// square(-4);
// square(); // returns NaN (Not a Number)

// named function with parameters/arguments and return

function subtract(num1, num2) {
    let difference = num1 - num2

    return difference;
}

// console.log(subtract(33, 10));

// callback function

function divideBy2(num) {
    return num / 2;
}

function calcAverage(num1, num2, dividingFunc) {
    let sum = num1 + num2;

    const average = dividingFunc(sum);

    console.log(average)
}

// calcAverage(3, 6, divideBy2);

// arrow function

const stringPrinted = () => {
    console.log("Printed by this function!");
}

const stringPrinted2 = () => console.log("Printed by this function!");

const subtracted = (num1, num2) => num1 - num2;

const squared = (num) => num * num;

// arrow function

function calcAverage(num1, num2) {
    let sum = num1 + num2;

    const average = (total) => total / 2;

    return average(sum);
}

//let average = calcAverage(10, 20);

// const calcAverage = (num1, num2) => (num1 + num2) / 2