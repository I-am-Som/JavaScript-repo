/*****************************************
 * 1️⃣ SYNCHRONOUS vs ASYNCHRONOUS PROGRAMMING
 *****************************************/

/*
 * ✅ WHAT?  
 * - **Synchronous programming**: Code executes **line by line** in order.
 * - **Asynchronous programming**: Code execution **does not wait** for long tasks to complete.
 *
 * ✅ WHY?  
 * - Synchronous code is simple but **blocks execution** for slow operations.
 * - Asynchronous code prevents blocking, making apps **fast and responsive**.
 *
 * ✅ HOW?  
 * - JavaScript is **single-threaded** but uses async techniques like **callbacks, promises, and async/await**.
 */

// 🔹 Example of **Synchronous Code** (Blocks Execution)
console.log("1️⃣ Start");
for (let i = 0; i < 3; i++) {
    console.log(`Processing ${i}`);
}
console.log("2️⃣ End");

// 🔹 Example of **Asynchronous Code** (Does Not Block Execution)
console.log("1️⃣ Start");
setTimeout(() => {
    console.log("3️⃣ Asynchronous Task Completed");
}, 1000);
console.log("2️⃣ End");

/*
 * 🔹 Output:
 * 1️⃣ Start
 * 2️⃣ End
 * 3️⃣ Asynchronous Task Completed (after 1 second)
 *
 * - The `setTimeout` function runs **after 1 second** without blocking other code.
 */

/*****************************************
 * 2️⃣ JAVASCRIPT ENGINE vs JAVASCRIPT ENVIRONMENT
 *****************************************/

/*
 * ✅ WHAT?  
 * - **JavaScript Engine**: A program that runs JavaScript code (e.g., V8 for Chrome, SpiderMonkey for Firefox).
 * - **JavaScript Environment**: Includes the **engine + Web APIs + event loop**.
 *
 * ✅ WHY?  
 * - The engine **compiles and executes** JavaScript.
 * - The environment provides **extra features** (like `setTimeout`, `DOM`, `fetch`).
 *
 * ✅ HOW?  
 * - The **engine** contains a **heap (memory)** and **call stack (execution order)**.
 * - The **environment** provides APIs, a call stack, an event loop, and task queues.
 */

// ✅ JavaScript Engine = V8 (compiles JavaScript into machine code)
// ✅ JavaScript Environment = V8 Engine + Web APIs (setTimeout, fetch, etc.) + Event Loop

/*****************************************
 * 3️⃣ TIMERS (setTimeout & setInterval)
 *****************************************/

/*
 * ✅ WHAT?  
 * - **setTimeout**: Runs a function **once** after a delay.
 * - **setInterval**: Runs a function **repeatedly** after a delay.
 *
 * ✅ WHY?  
 * - Useful for scheduling tasks **without blocking execution**.
 *
 * ✅ HOW?  
 * - Uses Web API timers, managed by the event loop.
 */

console.log("Start Timer");

// ✅ `setTimeout` executes after 2 seconds but **does not block** other code
setTimeout(() => {
    console.log("setTimeout executed after 2s");
}, 2000);

console.log("End Timer");

/*****************************************
 * 4️⃣ CALL STACK (Execution Order)
 *****************************************/

/*
 * ✅ WHAT?  
 * - The **call stack** keeps track of function execution in **LIFO (Last In, First Out)** order.
 *
 * ✅ WHY?  
 * - JavaScript is **single-threaded**, so it executes one task at a time.
 *
 * ✅ HOW?  
 * - New function calls are **pushed onto the stack**.
 * - Once completed, they are **popped off** the stack.
 */

function first() {
    console.log("First Function");
    second();
}

function second() {
    console.log("Second Function");
    third();
}

function third() {
    console.log("Third Function");
}

first(); // ✅ Call stack runs functions in order

/*
 * 🔹 Call Stack Order:
 * 1️⃣ first() → 2️⃣ second() → 3️⃣ third() → 🔄 Call stack empties
 */

/*****************************************
 * 5️⃣ EVENT LOOP (Handling Asynchronous Code)
 *****************************************/

/*
 * ✅ WHAT?  
 * - The **event loop** manages asynchronous tasks, allowing JavaScript to stay non-blocking.
 *
 * ✅ WHY?  
 * - Ensures JavaScript can handle **long-running operations** without freezing.
 *
 * ✅ HOW?  
 * - Moves completed async tasks **from task queue to call stack** when it's empty.
 */

console.log("1️⃣ Start");
setTimeout(() => console.log("3️⃣ Async Task"), 0);
console.log("2️⃣ End");

/*
 * 🔹 Output:
 * 1️⃣ Start
 * 2️⃣ End
 * 3️⃣ Async Task
 *
 * - Even though `setTimeout` has `0ms` delay, it's added to the **task queue**.
 * - The event loop moves it to the **call stack** only after all synchronous code finishes.
 */

/*****************************************
 * 6️⃣ TASK QUEUE vs MICROTASK QUEUE
 *****************************************/

/*
 * ✅ WHAT?  
 * - **Task Queue** (Macrotasks): Handles `setTimeout`, `setInterval`, `fetch`.
 * - **Microtask Queue**: Handles **Promises, process.nextTick** (executes **before** task queue).
 *
 * ✅ WHY?  
 * - Ensures **faster execution** of microtasks (Promises).
 *
 * ✅ HOW?  
 * - Microtasks run **before** tasks in the event loop.
 */

console.log("1️⃣ Start");

setTimeout(() => console.log("3️⃣ Task Queue (setTimeout)"), 0);

Promise.resolve().then(() => console.log("2️⃣ Microtask Queue (Promise)"));

console.log("4️⃣ End");

/*
 * 🔹 Output Order:
 * 1️⃣ Start
 * 4️⃣ End
 * 2️⃣ Microtask Queue (Promise) ✅ (Microtasks run first)
 * 3️⃣ Task Queue (setTimeout)
 */

/*****************************************
 * 7️⃣ CALLBACK HELL (Nested Callbacks)
 *****************************************/

/*
 * ✅ WHAT?  
 * - Callback hell occurs when multiple **nested callbacks** make code **hard to read**.
 *
 * ✅ WHY?  
 * - Too many callbacks create **hard-to-debug** code.
 *
 * ✅ HOW?  
 * - Solved using **Promises** or **async/await**.
 */

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

/*****************************************
 * 8️⃣ PROMISES (Avoid Callback Hell)
 *****************************************/

/*
 * ✅ WHAT?  
 * - A Promise represents a **future value** (resolved or rejected).
 *
 * ✅ WHY?  
 * - Avoids callback hell, making async code **easier to read**.
 *
 * ✅ HOW?  
 * - Uses `.then()` for success and `.catch()` for errors.
 */

const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("✅ Data Fetched!"), 2000);
});

fetchDataPromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

/*****************************************
 * 9️⃣ ASYNC/AWAIT (Better than Promises)
 *****************************************/

/*
 * ✅ WHAT?  
 * - `async/await` makes **promises easier to read**.
 *
 * ✅ WHY?  
 * - Improves readability by avoiding `.then()/.catch()`.
 *
 * ✅ HOW?  
 * - `await` pauses execution until the Promise resolves.
 */

async function fetchData() {
    console.log("Fetching Data...");
    const result = await fetchDataPromise;
    console.log(result);
}

fetchData();

/*
 * 🔹 Output:
 * Fetching Data...
 * ✅ Data Fetched! (after 2 seconds)
 */
