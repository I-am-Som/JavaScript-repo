// loops

// For Loop--------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-In Loop-----------------------------------------
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}

// For-Of Loop-------------------------------------------
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color);
}

// While Loop---------------------------------------------
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do-While Loop---------------------------------------------
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);