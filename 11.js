/*****************************************
 * 1️⃣ FUNCTION HOISTING (DECLARED FUNCTIONS ARE FULLY HOISTED)
 *****************************************/

// ✅ Function declarations are fully hoisted (can be called before definition)
console.log(hoistedFunction()); // ✅ "I am fully hoisted!"

function hoistedFunction() {
    return "I am fully hoisted!";
}

/*
 🔹 Why does this work?
 ✅ Function declarations are stored **fully** in memory during the compilation phase.
 ✅ So they can be called before they are defined.
*/

// ❌ Function Expressions are NOT hoisted like function declarations
// console.log(hoistedExpression()); // ❌ ReferenceError (Cannot access before initialization)
const hoistedExpression = function() {
    return "Function expressions are NOT hoisted!";
};
console.log(hoistedExpression()); // ✅ "Function expressions are NOT hoisted!"

/*
 🔹 Why does this fail?
 ❌ Function expressions behave like variables (hoisted but in **Temporal Dead Zone**).
*/

/*****************************************
 * 2️⃣ IIFE (Immediately Invoked Function Expression)
 *****************************************/

// ✅ IIFE runs **immediately**
(function() {
    console.log("IIFE: Runs immediately after definition!");
})();

// ✅ IIFE with parameters
(function(name) {
    console.log(`IIFE with parameter: Hello, ${name}!`);
})("Somanath");

/*
 🔹 Why use IIFE?
 ✅ Avoids polluting the global scope
 ✅ Useful for one-time setup code
 ✅ Creates private variables inside the function
*/

/*****************************************
 * 3️⃣ VARIABLE HOISTING (var vs let vs const)
 *****************************************/

// ✅ `var` is hoisted but initialized as `undefined`
console.log(varHoisted); // ✅ Output: undefined
var varHoisted = "I am hoisted!";
console.log(varHoisted); // ✅ "I am hoisted!"

/*
 🔹 Why does this work?
 ✅ `var` is hoisted but initialized as `undefined` before assignment.
*/

// ❌ `let` and `const` are hoisted but NOT initialized (TDZ applies)
// console.log(letHoisted); // ❌ ReferenceError (Cannot access before initialization)
let letHoisted = "I am NOT accessible before declaration!";
console.log(letHoisted); // ✅ Works here

// ❌ `const` behaves the same as `let` but must be assigned at declaration
// console.log(constHoisted); // ❌ ReferenceError (Cannot access before initialization)
const constHoisted = "I must be initialized!";
console.log(constHoisted); // ✅ Works here

/*
 🔹 Why does `let` and `const` fail?
 ❌ They are hoisted but kept in the **Temporal Dead Zone (TDZ)** until initialized.
*/

/*****************************************
 * 4️⃣ CLOSURES (Functions Remember Outer Scope)
 *****************************************/

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Closure: Outer -> ${outerVariable}, Inner -> ${innerVariable}`);
    };
}

const closureExample = outerFunction("Outer Value");
closureExample("Inner Value"); // ✅ "Closure: Outer -> Outer Value, Inner -> Inner Value"

/*
 🔹 Why use closures?
 ✅ Helps in **data encapsulation** (private variables)
 ✅ Used in **event handlers, setTimeout, and function factories**
*/

/*****************************************
 * 5️⃣ CALLBACK FUNCTION (Asynchronous Execution)
 *****************************************/

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data fetched successfully!"); // Simulates API call
    }, 2000);
}

fetchData((message) => {
    console.log(`Callback: ${message}`);
});

/*
 🔹 Why use callbacks?
 ✅ Handles asynchronous operations like API requests, file reading, or timers
 ✅ Used in **event handling and animations**
*/

/*****************************************
 * 6️⃣ CONSTRUCTOR FUNCTION (Blueprint for Objects)
 *****************************************/

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    };
}

const person1 = new Person("Alice", 25);
console.log(person1.greet()); // ✅ "Hello, I am Alice and I am 25 years old."

/*
 🔹 Why use constructor functions?
 ✅ Creates multiple objects with the same structure
 ✅ Works as a blueprint for objects
*/

/*****************************************
 * 7️⃣ OBJECTS AND PROTOTYPES (Prototype Chain)
 *****************************************/

function Animal(name) {
    this.name = name;
}

// ✅ Adding a method using **prototype**
Animal.prototype.speak = function() {
    return `Prototype: ${this.name} makes a sound!`;
};

const dog = new Animal("Dog");
console.log(dog.speak()); // ✅ "Dog makes a sound!"

/*
 🔹 Why use prototypes?
 ✅ Efficient memory usage (methods are stored in one place and shared)
 ✅ Enables object inheritance without duplicating methods
*/

/*****************************************
 * 8️⃣ CLASSES AND INHERITANCE (ES6 Syntax)
 *****************************************/

class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }

    describe() {
        return `This is a ${this.type} with ${this.wheels} wheels.`;
    }
}

// ✅ Inheritance: `Car` extends `Vehicle`
class Car extends Vehicle {
    constructor(brand, model) {
        super("Car", 4); // Calls parent class constructor
        this.brand = brand;
        this.model = model;
    }

    details() {
        return `Car: ${this.brand} ${this.model} - ${this.describe()}`;
    }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.details()); // ✅ "Tesla Model 3 - This is a Car with 4 wheels."

/*
 🔹 Why use classes?
 ✅ Easier to read and maintain
 ✅ Supports inheritance using `extends`
 ✅ Encapsulation (keeping properties and methods organized)
*/

/*****************************************
 * 9️⃣ FUNCTIONAL PROGRAMMING (Pure Functions & Higher-Order Functions)
 *****************************************/

// ✅ Pure Function (No side effects, same input = same output)
function square(num) {
    return num * num;
}

console.log(`Pure Function: square(4) = ${square(4)}`); // ✅ 16

// ✅ Higher-Order Function (A function that takes another function as an argument)
function operateOnArray(arr, operation) {
    return arr.map(operation);
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = operateOnArray(numbers, square);
console.log(`Higher-Order Function: Squared numbers = ${squaredNumbers}`); // ✅ [1, 4, 9, 16]

/*
 🔹 Why use functional programming?
 ✅ Improves code **reusability**
 ✅ Avoids **mutating data**, making debugging easier
*/

/*****************************************
 * 🔟 OBJECT ORIENTED PROGRAMMING (Encapsulation, Abstraction, Inheritance, Polymorphism)
 *****************************************/

class BankAccount {
    #balance; // Private property (Encapsulation)

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit: ${amount} added. New balance: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdraw: ${amount} deducted. New balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return `Balance: ${this.#balance}`;
    }
}

const myAccount = new BankAccount("Somanath", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance());
