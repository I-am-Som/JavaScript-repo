/*****************************************
 * 1️⃣ FUNCTION HOISTING
 *****************************************/

/*
 * ✅ WHAT?  
 * Hoisting is JavaScript's behavior of moving function **declarations**  
 * to the top of the execution context before running the code.
 *
 * ✅ WHY?  
 * Allows calling functions **before they are defined** in the code.
 *
 * ✅ HOW?  
 * Function declarations are **fully hoisted**, meaning they can be  
 * used before they appear in the script.
 */

// ✅ Works due to hoisting
console.log(hoistedFunction()); // Output: "I am fully hoisted!"

function hoistedFunction() {
    return "I am fully hoisted!";
}

// ❌ Function expressions are NOT hoisted
// console.log(hoistedExpression()); // ❌ ReferenceError: Cannot access before initialization
const hoistedExpression = function() {
    return "Function expressions are NOT hoisted!";
};
console.log(hoistedExpression()); // ✅ Works after declaration

/*
 * 🔹 Function declarations are fully hoisted.
 * 🔹 Function expressions behave like variables, so they are not hoisted.
 */

/*****************************************
 * 2️⃣ IIFE (Immediately Invoked Function Expression)
 *****************************************/

/*
 * ✅ WHAT?  
 * An IIFE is a function that runs **immediately** after being defined.
 *
 * ✅ WHY?  
 * Avoids polluting the **global scope** and is useful for initialization.
 *
 * ✅ HOW?  
 * It is written inside parentheses and immediately executed.
 */

// ✅ Basic IIFE
(function() {
    console.log("IIFE: Runs immediately!");
})();

// ✅ IIFE with parameters
(function(name) {
    console.log(`IIFE with parameter: Hello, ${name}!`);
})("Somanath");

/*****************************************
 * 3️⃣ VARIABLE HOISTING (var vs let vs const)
 *****************************************/

/*
 * ✅ WHAT?  
 * Hoisting affects **variables declared with `var`, `let`, and `const`**.
 *
 * ✅ WHY?  
 * It helps JavaScript allocate memory before execution.
 *
 * ✅ HOW?  
 * `var` is hoisted but initialized as **undefined**,  
 * while `let` and `const` are hoisted but **not initialized** (TDZ).
 */

// ✅ `var` is hoisted but set to `undefined`
console.log(varHoisted); // Output: undefined
var varHoisted = "I am hoisted!";
console.log(varHoisted); // "I am hoisted!"

// ❌ `let` and `const` throw errors if accessed before declaration
// console.log(letHoisted); // ❌ ReferenceError (TDZ applies)
let letHoisted = "I am NOT accessible before declaration!";
console.log(letHoisted); // ✅ Works here

// ❌ `const` also behaves like `let`, but must be assigned at declaration
const constHoisted = "I must be initialized!";
console.log(constHoisted); // ✅ Works here

/*****************************************
 * 4️⃣ CLOSURES
 *****************************************/

/*
 * ✅ WHAT?  
 * A closure is a function that **remembers variables** from its  
 * outer function even after the outer function has finished execution.
 *
 * ✅ WHY?  
 * Used for **data encapsulation**, event handlers, and function factories.
 *
 * ✅ HOW?  
 * The inner function retains access to variables in its outer scope.
 */

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Closure: Outer -> ${outerVariable}, Inner -> ${innerVariable}`);
    };
}

const closureExample = outerFunction("Outer Value");
closureExample("Inner Value"); // "Closure: Outer -> Outer Value, Inner -> Inner Value"

/*****************************************
 * 5️⃣ CALLBACK FUNCTION
 *****************************************/

/*
 * ✅ WHAT?  
 * A callback function is a function **passed as an argument** to  
 * another function to be executed later.
 *
 * ✅ WHY?  
 * Used for **asynchronous operations** like API requests, timers, or events.
 *
 * ✅ HOW?  
 * A function calls another function when it completes an operation.
 */

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 2000);
}

fetchData((message) => {
    console.log(`Callback: ${message}`);
});

/*****************************************
 * 6️⃣ CONSTRUCTOR FUNCTION
 *****************************************/

/*
 * ✅ WHAT?  
 * A constructor function is used to create objects **with shared properties**.
 *
 * ✅ WHY?  
 * Helps create multiple objects **without repeating code**.
 *
 * ✅ HOW?  
 * We use the `new` keyword to instantiate objects.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    };
}

const person1 = new Person("Alice", 25);
console.log(person1.greet()); // "Hello, I am Alice and I am 25 years old."

/*****************************************
 * 7️⃣ PROTOTYPES
 *****************************************/

/*
 * ✅ WHAT?  
 * JavaScript uses **prototypes** to enable object inheritance.
 *
 * ✅ WHY?  
 * Makes memory usage **efficient** by sharing methods across objects.
 *
 * ✅ HOW?  
 * We add methods to a function’s prototype instead of inside the constructor.
 */

function Animal(name) {
    this.name = name;
}

// ✅ Adding a method using **prototype**
Animal.prototype.speak = function() {
    return `${this.name} makes a sound!`;
};

const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a sound!"

/*****************************************
 * 8️⃣ CLASSES & INHERITANCE (ES6)
 *****************************************/

/*
 * ✅ WHAT?  
 * JavaScript classes provide a **cleaner syntax** for object creation.
 *
 * ✅ WHY?  
 * More **readable**, supports **inheritance**, and improves code structure.
 *
 * ✅ HOW?  
 * Use the `class` keyword, with `extends` for inheritance.
 */

class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }

    describe() {
        return `This is a ${this.type} with ${this.wheels} wheels.`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super("Car", 4);
        this.brand = brand;
        this.model = model;
    }

    details() {
        return `Car: ${this.brand} ${this.model} - ${this.describe()}`;
    }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.details()); // "Tesla Model 3 - This is a Car with 4 wheels."

/*****************************************
 * 9️⃣ FUNCTIONAL PROGRAMMING
 *****************************************/

/*
 * ✅ WHAT?  
 * Functional programming treats functions as **first-class citizens**.
 *
 * ✅ WHY?  
 * Makes code **more predictable**, reusable, and avoids side effects.
 *
 * ✅ HOW?  
 * Uses **pure functions**, higher-order functions, and immutability.
 */

function square(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(square);
console.log(`Squared numbers = ${squaredNumbers}`); // [1, 4, 9, 16]

/*****************************************
 * 🔟 OBJECT ORIENTED PROGRAMMING (OOP)
 *****************************************/

/*
 * ✅ WHAT?  
 * OOP is a programming paradigm using **objects and classes**.
 *
 * ✅ WHY?  
 * Helps organize and reuse code using **Encapsulation, Inheritance, Abstraction, and Polymorphism**.
 *
 * ✅ HOW?  
 * Objects are created using **classes and constructors**.
 */

class BankAccount {
    #balance; // Private property (Encapsulation)

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) this.#balance -= amount;
    }

    getBalance() {
        return `Balance: ${this.#balance}`;
    }
}

const myAccount = new BankAccount("Somanath", 1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // "Balance: 1500"
