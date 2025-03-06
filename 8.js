// 1. What is Error Handling?
// Error handling is a process used to detect and manage errors that occur during the execution of a program. 
// It helps prevent the program from crashing and provides a better user experience by handling errors gracefully.

// 2. Types of Errors
// Syntax Errors: These occur when there is a mistake in the code syntax, such as missing brackets or semicolons. 
// They are usually caught by the interpreter before the code runs.

// Runtime Errors (Exceptions): These occur during the execution of the code, such as trying to access an 
// undefined variable or calling a non-existent method.

// Logical Errors: These occur when the code runs without errors but does not produce the expected results due to a
//  flaw in the logic.

// 3. Try-Catch-Finally Block
// The try...catch...finally block is the primary mechanism for handling runtime errors in JavaScript.

try {
    let x = 10 / 0; // This will throw an error
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("This code will always run.");
  }

  
//   4. Throw Statement
// The throw statement is used to explicitly throw an error.

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return x / y;
}

try {
  divide(10, 0);
} catch (error) {
  console.error("Error:", error.message);
}

// Error Object
// The Error object provides information about the error, including its name and message.


try {
  throw new Error("Something went wrong.");
} catch (error) {
  console.error("Error Name:", error.name);
  console.error("Error Message:", error.message);
}