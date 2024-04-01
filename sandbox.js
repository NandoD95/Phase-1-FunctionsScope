/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

// semicolons are optional in JS

/*

    - function: reusable blocks of code
        - function definition: stores the code to be reused
        - function call: uses the code
    - parameter: takes inputted code into a function definition
    - argument: passes inputted code from a function call
    - return statement: passes code from inside a function scope to the function call's scope
    - callback function: function passed as an argument

    - scope: which portion of a file can access a piece of code
        - global scope: seen by entire file
        - local scope: seen only within a block of code (often in between curly brackets)

*/

/* ----------------------------------------------------- 
    NAMED FUNCTIONS
----------------------------------------------------- */

function sayHello(){
    console.log("Hello there!")
}
sayHello()

function sayHelloToYou(name){
    console.log(`Hello there,${name}`)
    // OR CAN DO IT LIKE THIS console.log("Hello there, " + name + "!") 
}
sayHelloToYou("Tito")
sayHelloToYou("Nando")

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
addTwoNumbers(1, 2)
/* ----------------------------------------------------- 
    ANONYMOUS FUNCTIONS
----------------------------------------------------- */

const squaredNum= function (num){
    // return num * num 'OR CAN DO IT LIKE THIS'
    return num ** 2 
}

square = squaredNum(10)
console.log(square)

/* ----------------------------------------------------- 
    ARROW FUNCTIONS
----------------------------------------------------- */

const cubedNum = (num) => {
    return num ** 3
}
cube = cubedNum(3)
console.log(cube)

/* ----------------------------------------------------- 
    SCOPE
----------------------------------------------------- */

let num1 = 3

function incrementer(){
    let num2 = 8

    num1 = num1 + 1
    num2 = num2 + 1

    return num2
}

num2 = incrementer()
console.log(`num1: ${num1}`)
console.log(`num2: ${num2}`)

/* ----------------------------------------------------- 
    ARRAY METHODS WITH CALLBACK FUNCTIONS
----------------------------------------------------- */

const nums = [1, 2, 3, 4, 5, 6]

nums.forEach((num) => console.log(num ** (2)))

nums.forEach(function consoleLogNum(num) {
console.log(num)
})