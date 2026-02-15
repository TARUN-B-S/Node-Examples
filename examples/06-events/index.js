/**
 * Example 06: Events (EventEmitter)
 * 
 * This example demonstrates the Observer pattern in Node.js using the
 * built-in 'events' module. Many built-in objects (like Streams/Servers)
 * inherit from EventEmitter.
 */

const EventEmitter = require('events');

// Create a custom emitter class
class MyEmitter extends EventEmitter { }

// Initialize an instance
const myEmitter = new MyEmitter();

// 1. Define event listeners
myEmitter.on('userLoggedIn', (user) => {
    console.log(`[LOG]: User ${user.name} logged in at ${new Date().toLocaleTimeString()}`);
});

myEmitter.on('userLoggedIn', (user) => {
    // Multiple listeners for the same event
    console.log(`[NOTIFY]: Sending welcome email to ${user.email}`);
});

myEmitter.once('systemStart', () => {
    // This listener will only be triggered once
    console.log('[SYSTEM]: System started up.');
});

// 2. Emit events
console.log('Emitting events...');

myEmitter.emit('systemStart');
myEmitter.emit('systemStart'); // This won't trigger anything

myEmitter.emit('userLoggedIn', { name: 'Alice', email: 'alice@example.com' });
myEmitter.emit('userLoggedIn', { name: 'Bob', email: 'bob@example.com' });

// 3. Error Handling
myEmitter.on('error', (err) => {
    console.error('Whoops! there was an error:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong'));
