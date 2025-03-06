// objects

/*
1. What is an Object?
An object in JavaScript is a collection of properties, where each property 
is an association between a name (or key) and a value. Properties can be 
simple values like strings or numbers, or they can be functions, in which case they are known as methods.
*/

/*
2. Defining Objects
Objects can be defined using an object literal or the Object constructor.
*/

// Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function() {
      console.log("Hello!");
    }
};

// Object Constructor
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 30;
person1.sayHello = function() {
  console.log("Hello!");
};


/*3. Accessing Object Properties
You can access object properties using either dot notation or bracket notation.
*/

// Dot Notation

console.log(person.firstName);
// Bracket Notation

console.log(person["firstName"]);


// 4. Adding or Modifying Properties
// You can add new properties or modify existing ones using dot notation or bracket notation.


person.nationality = "American"; // Adding a new property
person.age = 31; // Modifying an existing property


// 5. Object Methods
// Methods are functions stored as properties of an object. They can be used to perform actions on the object.


person.sayHello(); // Calling a method


// 6. Enumerating Properties
// There are several ways to enumerate properties:

// for...in Loop: Iterates over all enumerable properties, including those from the prototype chain.


for (const key in person) {
  console.log(key, person[key]);
}
Object.keys() //Method: Returns an array of only the enumerable own string property names.


Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
Object.getOwnPropertyNames() //Method: Returns an array containing all own property names, regardless of enumerability.


Object.getOwnPropertyNames(person).forEach(key => {
  console.log(key, person[key]);
});


// 7. Property Management Methods
Object.defineProperty() //Method: Adds a new property or modifies an existing one with a descriptor.


Object.defineProperty(person, "year", { value: 2008 });
Object.defineProperties() //Method: Adds multiple properties at once.


Object.defineProperties(person, {
  year: { value: 2008 },
  occupation: { value: "Developer" }
});


// 8. Static Object Methods
Object.assign() //Method: Copies properties from one or more source objects to a target object.


const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }
Object.create() //Method: Creates a new object with a specified prototype.


const proto = { isPrototypeOf: true };
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true