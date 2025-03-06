// arrays

/*
1. What is an Array?
An array in JavaScript is a data structure that stores multiple values under a single variable name. 
It is essentially a list-like object that can hold various data types, including strings, numbers, 
objects, and even other arrays136.
*/

/*
2. Creating Arrays
Arrays can be created using two main methods*/

/*
Array Literal Notation: This is the most common way to create an array, using square brackets [] and separating elements with commas.
*/
const colors = ["Red", "Green", "Blue"];

/*
Array Constructor: You can also use the Array() constructor to create an array.
*/
const colors1 = new Array("Red", "Green", "Blue");

/*
3. Array Properties and Methods
Arrays have several useful properties and methods:
*/

const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.length); // Outputs: 3

const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]

console.log(numbers.pop()); // Outputs: 3
console.log(numbers); // Outputs: [1, 2]

const doubled = numbers.map(x => x * 2);
console.log(doubled); // Outputs: [2, 4, 6]

const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]

const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum); // Outputs: 15