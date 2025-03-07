// Example array
const numbers = [1, 2, 3, 4, 5];

// 1. map() - Creates a new array with the results of applying a function on every element.
const doubled = numbers.map(num => num * 2); // Output: [2, 4, 6, 8, 10]
console.log(doubled); // [2, 4, 6, 8, 10]

// 2. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0); // Output: [2, 4]
console.log(evenNumbers); // [2, 4]

// 3. reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value.
const sum = numbers.reduce((a, b) => a + b, 0); // Output: 15
console.log(sum); // 15

// 4. find() - Returns the first element in the array that satisfies the provided testing function.
const firstEven = numbers.find(num => num % 2 === 0); // Output: 2
console.log(firstEven); // 2

// 5. forEach() - Executes a provided function once for each array element.
numbers.forEach(num => console.log(num)); // Output: Logs each number in the array
// 1
// 2
// 3
// 4
// 5

// 6. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
const hasEven = numbers.some(num => num % 2 === 0); // Output: true
console.log(hasEven); // true

// 7. every() - Tests whether all elements in the array pass the test implemented by the provided function.
const allEven = numbers.every(num => num % 2 === 0); // Output: false
console.log(allEven); // false

// 8. includes() - Determines whether an array includes a certain element.
const includesThree = numbers.includes(3); // Output: true
console.log(includesThree); // true

// 9. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nested = [1, [2, [3, 4]]];
const flattened = nested.flat(2); // Output: [1, 2, 3, 4]
console.log(flattened); // [1, 2, 3, 4]

// 10. flatMap() - Maps each element using a mapping function, then flattens the result into a new array.
const mappedAndFlattened = numbers.flatMap(num => [num, num * 2]); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
console.log(mappedAndFlattened); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// 11. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const modified = numbers.splice(2, 1, 10); // Removes one element starting from index 2 and inserts 10
console.log(numbers); // [1, 2, 10, 4, 5]
console.log(modified); // [3]

// 12. slice() - Returns a shallow copy of a portion of an array into a new array object.
const sliced = numbers.slice(1, 3); // Copies elements from index 1 to (but not including) 3
console.log(sliced); // [2, 10]

// 13. concat() - Used to merge two or more arrays.
const merged = numbers.concat([6, 7]); // Merges numbers with [6, 7]
console.log(merged); // [1, 2, 10, 4, 5, 6, 7]

// 14. push() - Adds one or more elements to the end of an array.
numbers.push(6, 7); // Adds 6 and 7 to the end of numbers
console.log(numbers); // [1, 2, 10, 4, 5, 6, 7]

// 15. pop() - Removes the last element from an array and returns that element.
const lastElement = numbers.pop(); // Removes and returns the last element
console.log(lastElement); // 7
console.log(numbers); // [1, 2, 10, 4, 5, 6]

// 16. shift() - Removes the first element from an array and returns that element.
const firstElement = numbers.shift(); // Removes and returns the first element
console.log(firstElement); // 1
console.log(numbers); // [2, 10, 4, 5, 6]

// 17. unshift() - Adds one or more elements to the beginning of an array.
numbers.unshift(0, 1); // Adds 0 and 1 to the beginning
console.log(numbers); // [0, 1, 2, 10, 4, 5, 6]

// 18. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = numbers.indexOf(10); // Finds the index of 10
console.log(index); // 3

// 19. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const lastIndex = numbers.lastIndexOf(2); // Finds the last index of 2
console.log(lastIndex); // 2

// 20. sort() - Sorts the elements of an array in place and returns the sorted array.
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(numbers); // [0, 1, 2, 4, 5, 6, 10]

// 21. reverse() - Reverses the order of the elements of an array in place and returns the reversed array.
numbers.reverse(); // Reverses the order of numbers
console.log(numbers); // [10, 6, 5, 4, 2, 1, 0]
