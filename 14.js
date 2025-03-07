<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Web Concepts</title>
    <style>
        #glCanvas { width: 400px; height: 400px; border: 1px solid black; }
    </style>
</head>
<body>

    <h2>1️⃣ Global Object</h2>
    <button onclick="checkGlobalObject()">Check Global Object</button>
    
    <h2>2️⃣ DOM Manipulation</h2>
    <button onclick="changeText()">Change Text</button>
    <p id="text">Original Text</p>

    <h2>3️⃣ Event Propagation</h2>
    <div id="parent" style="padding: 20px; background: lightgray;">
        Parent (Click Me)
        <button id="child">Child Button</button>
    </div>

    <h2>4️⃣ Form Handling</h2>
    <form id="myForm">
        <input type="text" id="name" placeholder="Enter Name">
        <button type="submit">Submit</button>
    </form>

    <h2>5️⃣ LocalStorage & SessionStorage</h2>
    <button onclick="storeData()">Store Data</button>
    <button onclick="retrieveData()">Retrieve Data</button>

    <h2>6️⃣ Web Workers</h2>
    <button onclick="startWorker()">Start Worker</button>
    
    <h2>7️⃣ WebSockets</h2>
    <button onclick="connectWebSocket()">Connect WebSocket</button>

    <h2>8️⃣ WebGL (3D Graphics)</h2>
    <canvas id="glCanvas"></canvas>

    <script>

        /*****************************************
         * 1️⃣ GLOBAL OBJECT
         * ---------------------------------------
         * ✅ WHAT? The global object provides built-in functions, 
         * objects, and variables that are accessible anywhere in 
         * the JavaScript program.
         * ✅ WHY? It enables global functions like `setTimeout()`, 
         * `console.log()`, and global properties like `window.innerWidth`.
         * ✅ HOW? In browsers, the global object is `window`, in 
         * Node.js it is `global`, and in Web Workers it is `self`.
         *****************************************/
        function checkGlobalObject() {
            console.log("Global Object:", window); // ✅ In browser
        }

        /*****************************************
         * 2️⃣ DOM MANIPULATION
         * ---------------------------------------
         * ✅ WHAT? DOM (Document Object Model) allows JavaScript to 
         * dynamically update webpage content.
         * ✅ WHY? It helps create interactive, user-friendly websites 
         * without requiring full page reloads.
         * ✅ HOW? Use methods like `document.getElementById()`, 
         * `querySelector()`, `.innerText`, `.style`, etc.
         *****************************************/
        function changeText() {
            document.getElementById("text").innerText = "Text Changed!";
        }

        /*****************************************
         * 3️⃣ EVENT PROPAGATION (Bubbling & Capturing)
         * ---------------------------------------
         * ✅ WHAT? Event propagation defines how events flow 
         * through the DOM (Bubble up or Capture down).
         * ✅ WHY? It allows developers to control event handling 
         * at different levels in a webpage.
         * ✅ HOW? Bubbling starts from target element to root, 
         * capturing goes from root to target.
         *****************************************/
        document.getElementById("parent").addEventListener("click", function() {
            console.log("Parent Clicked!"); // Captures Parent Click
        }, true); // Capture phase

        document.getElementById("child").addEventListener("click", function(e) {
            console.log("Child Clicked!");
            e.stopPropagation(); // Stops event from bubbling up
        });

        /*****************************************
         * 4️⃣ FORM HANDLING
         * ---------------------------------------
         * ✅ WHAT? JavaScript captures user input from forms.
         * ✅ WHY? It prevents unnecessary page reloads and 
         * allows client-side validation.
         * ✅ HOW? Use `event.preventDefault()` to stop 
         * form submission and handle input dynamically.
         *****************************************/
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            alert("Hello, " + name);
        });

        /*****************************************
         * 5️⃣ LOCALSTORAGE & SESSIONSTORAGE
         * ---------------------------------------
         * ✅ WHAT? These APIs store data in the browser.
         * ✅ WHY? LocalStorage persists after page reloads, 
         * SessionStorage clears when the tab closes.
         * ✅ HOW? Use `.setItem()`, `.getItem()`, `.removeItem()`.
         *****************************************/
        function storeData() {
            localStorage.setItem("username", "John");
            sessionStorage.setItem("sessionData", "Temporary Data");
            console.log("Data Stored!");
        }

        function retrieveData() {
            console.log("LocalStorage:", localStorage.getItem("username"));
            console.log("SessionStorage:", sessionStorage.getItem("sessionData"));
        }

        /*****************************************
         * 6️⃣ WEB WORKERS
         * ---------------------------------------
         * ✅ WHAT? Web Workers run JavaScript in a background thread.
         * ✅ WHY? They improve performance by offloading tasks 
         * from the main thread.
         * ✅ HOW? Create a Worker thread using `new Worker()`.
         *****************************************/
        function startWorker() {
            let worker = new Worker(URL.createObjectURL(new Blob([`
                onmessage = function(e) {
                    postMessage(e.data * 2);
                };
            `], { type: "application/javascript" })));

            worker.postMessage(5);
            worker.onmessage = (e) => console.log("Worker Output:", e.data);
        }

        /*****************************************
         * 7️⃣ WEBSOCKETS
         * ---------------------------------------
         * ✅ WHAT? WebSockets enable real-time, two-way communication.
         * ✅ WHY? Useful for chat apps, live updates, multiplayer games.
         * ✅ HOW? Use `new WebSocket("wss://example.com")`.
         *****************************************/
        function connectWebSocket() {
            const socket = new WebSocket("wss://echo.websocket.org");

            socket.onopen = () => {
                console.log("Connected to WebSocket!");
                socket.send("Hello Server!");
            };

            socket.onmessage = (event) => {
                console.log("Received:", event.data);
            };
        }

        /*****************************************
         * 8️⃣ WEBGL (3D Graphics)
         * ---------------------------------------
         * ✅ WHAT? WebGL is a JavaScript API for rendering 3D graphics.
         * ✅ WHY? Used for games, simulations, and visual effects.
         * ✅ HOW? Get WebGL context with `canvas.getContext("webgl")`.
         *****************************************/
        function initializeWebGL() {
            let canvas = document.getElementById("glCanvas");
            let gl = canvas.getContext("webgl");

            if (!gl) {
                console.log("WebGL Not Supported");
                return;
            }
            
            console.log("WebGL Initialized!");
        }

        initializeWebGL(); // Run WebGL initialization

    </script>

</body>
</html>
