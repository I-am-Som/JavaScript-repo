async function f1(a, b) {
    return new Promise(resolve => setTimeout(() => resolve(a + b), 1000)).then(resolve => console.log(resolve));
}

function f2() {
    console.log("Somu");
}

function f3() {
    console.log("Ankit");
}
console.log(f1(2, 3));
f2();
f3();
