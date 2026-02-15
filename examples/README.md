# Node.JS Concept Examples

This folder contains a series of examples designed to introduce Node.JS concepts, ranging from basic to intermediate levels.

## How to Run

To run any of the examples, navigate to its directory (or provide the full path) and run it using the `node` command:

```bash
node examples/01-hello-world/index.js
```

---

## Basic Examples

### 1. [01-Hello World](01-hello-world/index.js)
The classic introduction. Demonstrates basic console output and command-line arguments.

### 2. [02-File System](02-file-system/index.js)
Shows how to read, write, and append to files using the built-in `fs` module (both sync and async).

### 3. [03-Modules](03-modules/)
Demonstrates the CommonJS module system (`module.exports` and `require`).

### 4. [04-HTTP Server](04-http-server/index.js)
Shows how to build a basic web server from scratch using the native `http` module.

---

## Intermediate Examples

### 5. [05-Async Patterns](05-async-patterns/index.js)
Explains asynchronous programming in Node.js, comparing Promises and the modern `async/await` syntax.

### 6. [06-Events](06-events/index.js)
Demonstrates the `EventEmitter` class and the observer pattern, which is central to Node.js's architecture.

### 7. [07-Streams](07-streams/index.js)
Shows how to process large amounts of data efficiently using readable and writable streams.

### 8. [08-Express Basics](08-express-basics/index.js)
An introduction to the Express.js framework for building web servers and APIs.
*Note: Requires `npm install express` to run.*

---

## Getting Started
Most examples only use built-in Node.js modules. To run the Express example, you will first need to install the dependencies:

```bash
cd examples/08-express-basics
npm init -y
npm install express
node index.js
```
