// Part 1: Let vs Var vs Const
console.log("Let vs Var vs Const");
let letVar = 10;
var varVar = 20;
const constVar = 30;

console.log("Let:", letVar);
console.log("Var:", varVar);
console.log("Const:", constVar);

try {
  let letVar = 40; // Error: Identifier 'letVar' has already been declared
  console.log("Let re-declaration:", letVar);
} catch (error) {
  console.error("Error: Let re-declaration not allowed");
}

var varVar = 50; // No error
console.log("Var re-declaration:", varVar);

try {
  constVar = 60; // Error: Assignment to constant variable
  console.log("Const re-assignment:", constVar);
} catch (error) {
  console.error("Error: Const re-assignment not allowed");
}

// Part 2: Truthy and Falsy Values
console.log("\nTruthy and Falsy Values");
if (0) { // Falsy
  console.log("This won't run");
} else {
  console.log("0 is falsy");
}

if ("Hello") { // Truthy
  console.log("Non-empty strings are truthy");
}

// Part 3: Short Circuit Evaluation
console.log("\nShort Circuit Evaluation");
let x = 0;
let y = 10;

if (x && y > 5) { // x is falsy, so y > 5 is not evaluated
  console.log("This won't run");
} else {
  console.log("Short circuit: x is falsy");
}

if (x || y > 5) { // x is falsy, but y > 5 is evaluated
  console.log("Short circuit: y > 5 is evaluated");
}

// Part 4: Type Equality and Coercion
console.log("\nType Equality and Coercion");
console.log(5 === "5"); // False (strict equality)
console.log(5 == "5"); // True (loose equality)

// Part 5: Pass by Value and Pass by Reference
console.log("\nPass by Value and Pass by Reference");
let num = 5;
function changeValue(y) {
  y = 10;
}
changeValue(num);
console.log("Primitive:", num); // Still 5

let obj = { name: "John" };
function changeObject(o) {
  o.name = "Jane";
}
changeObject(obj);
console.log("Object:", obj.name); // Now "Jane"

// Part 6: Autoboxing and Primitive Wrapper Objects
console.log("\nAutoboxing and Primitive Wrapper Objects");
let number = 5;
console.log(number.toString()); // Autoboxing occurs here
