// function

/*
1. Function Declaration
A function declaration is a statement that defines a function. 
It starts with the function keyword, followed by the function 
name, parameters in parentheses, and the function body in curly braces.
*/

function greet(name) {
    console.log(`Hello, ${name}!`);
}

/*
2. Function Expression
A function expression is a way to define a function as part of a larger expression.
It can be assigned to a variable or passed as an argument to another function.
*/

let greet = function(name) {
    console.log(`Hello, ${name}!`);
};

/* 
3. Parameters and Arguments
Parameters: These are the names given to the values passed into a function when it is defined.

Arguments: These are the actual values passed into a function when it is called.
*/

function sum(a, b) { // a and b are parameters
    return a + b;
}

console.log(sum(3, 5)); // 3 and 5 are arguments
  

/*
4. Default Parameters
Default parameters allow you to set a default value for a parameter if no argument is passed when calling the function.
*/
  
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}
  
greet(); // Outputs: Hello, World!
greet("Alice"); // Outputs: Hello, Alice!

/*
Return Statement
The return statement specifies the value that a function returns when it is called.
*/
function square(x) {
    return x * x;
}
  
console.log(square(4)); // Outputs: 16
  