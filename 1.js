// Basic syntax and structure

// comments-----------------------------------------------------------------------

// This is a single-line comment
console.log("Hello, World!"); // This is also a single-line comment

/* This is a
   multi-line comment */




   // variables in javascript--------------------------------------------------------

var name = "John";
var name = "Jane"; // Updates the value of name to "Jane"

   
let age = 30;
if (true) {
  let age = 31; // Creates a new variable in the if block
}

const PI = 3.14159;
// PI = 2.71; // Throws an error


//  data types in javascript---------------------------------------------------------

let name1 = "John"; // String
let age1 = 30; // Number
let isAdmin = true; // Boolean
let user = null; // Null
let occupation; // Undefined
let person = { name: "Jane", age: 25 }; // Object
let numbers = [1, 2, 3]; // Array
let uniqueId = Symbol('uniqueId'); // Symbol
let largeNumber = 12345678901234567890n; // BigInt

console.log(name1); // John
console.log(age1); // 30
console.log(isAdmin); // true
console.log(user); // null
console.log(occupation); // undefined
console.log(person); // { name: 'Jane', age: 25 }
console.log(numbers); // [ 1, 2, 3 ]
console.log(uniqueId); // Symbol(uniqueId)
console.log(largeNumber); // 12345678901234567890n

console.log("---------------------------------");

console.log(typeof name1); // "string"
console.log(typeof age); // "number"
console.log(typeof isAdmin); // "boolean"
console.log(typeof user); // "object" (Note: null is a special case)
console.log(typeof occupation); // "undefined"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (Note: arrays are objects in JavaScript)
console.log(typeof uniqueId); // "symbol"
console.log(typeof largeNumber); // "bigint"