/**
 * Example 04: HTTP Server
 * 
 * This example demonstrates how to create a simple web server using Node.js's 
 * built-in 'http' module without any external frameworks.
 */

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Handle routing
    if (req.url === '/') {
        res.end('Welcome to the Node.js HTTP Server!\n');
    } else if (req.url === '/about') {
        res.end('This is a simple Node.js HTTP server example.\n');
    } else {
        res.writeHead(404);
        res.end('404: Not Found\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop the server.');
});

// Auto-close after 5 seconds for demonstration purposes in an automated environment
if (process.env.AUTO_CLOSE) {
    setTimeout(() => {
        console.log('Auto-closing server...');
        server.close();
    }, 5000);
}
