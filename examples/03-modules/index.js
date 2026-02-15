/**
 * Example 03: Modules
 * 
 * This example demonstrates how to create and use custom modules in Node.js.
 * Breaking code into modules helps in organization and reusability.
 */

const math = require('./math');

const a = 10;
const b = 5;

console.log(`Math Operations on ${a} and ${b}:`);
console.log(`Add: ${math.add(a, b)}`);
console.log(`Subtract: ${math.subtract(a, b)}`);
console.log(`Multiply: ${math.multiply(a, b)}`);
console.log(`Divide: ${math.divide(a, b)}`);
