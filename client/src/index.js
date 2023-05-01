// JavaScript code goes here

console.log("Hello, World!")
function printastring(){
    console.log(`Printed by this function`)
}
printastring();

const globalnum=0
function gaming() {console.log(globalnum)}
gaming()
//named function with return statement

function returnAString(){
    const string="This is a returnable string."
    
 return string;
}
const globalString= returnAString()
console.log(globalString)

// named function with parameters/arguments
function square(num) {
    let squaredNum= num * num
    console.log(squaredNum)
}
square(2)

//named function with parameters/arguments and return
function square2(num,num2){
    let squaredNum = num*num2
    return (squaredNum)
}
console.log(square2(3,6))

// Callback function
function divideby2(num)
{return num / 2}

function calcAverage(num1,num2,dividingfunc){
    const average = dividingfunc(num1 + num2)
console.log(average)}
calcAverage(4,4,divideby2)

// arrow functions
const stringprinted = () => {
 console.log(`Printed by this function`)}

 stringprinted()

 function calcAverage(num1,num2) {
    let sum = num1 + num2;
    const average= (total) => total / 2;
    return average(sum);
 }


console.log(calcAverage(2,1))

function addsQuotationMarks(stringwithoutquotes) 
{`"${stringwithoutquotes}"`}
addsQuotationMarks(hi)
function takeStringAndCallWrap(string) {
     return addsQuotationMarks(string);
}

