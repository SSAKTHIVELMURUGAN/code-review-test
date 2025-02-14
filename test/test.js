const a = 3;
const b = 4;
const c = a + b;
console.log(c);

console.log('test.js');

console.log("Hello");

// ❌ Error: Reassignment to constant variable (no-const-assign)
a = 2; // This should trigger an ESLint error

// ❌ Error: 'log' is not defined (no-undef)
log("Hello, world!");

// ❌ Error: Unused variable (no-unused-vars)
let unusedVar = "This variable is never used";

// ❌ Error: Unreachable code after return statement
function test() {
    return;
    console.log("This will never run");
}

// ❌ Error: eval is dangerous (no-eval)
eval("console.log('Unsafe code execution')");
