/* eslint-env node */  // Ensure console and other global variables are recognized
/* eslint no-console: "off" */ // Allow console.log (or remove this if logging should be disabled)

const a = 1;
const b = 2;
const c = a + b;

console.log(c);
console.log('test.js');

function test() {
    // Use strict equality
    if (b === 1) {
        console.log('test');
    }
    console.log('test');
}

// Call the function so it's not unused
test();

// Example variable usage to prevent 'no-unused-vars' error
const unusedVar = 'This is used';
console.log(unusedVar);

// Remove eval to prevent security risks
// eval('console.log("Avoid eval")'); ❌ Removed this
