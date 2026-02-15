/**
 * Example 08: Express Basics
 * 
 * This example introduces Express.js, the most popular web framework for Node.js.
 * It provides a more robust set of features for web and mobile applications.
 * 
 * NOTE: This requires 'express' to be installed (npm install express).
 * For this isolated demo, we check if it is available.
 */

try {
    const express = require('express');
    const app = express();
    const PORT = 3001;

    // Middleware to parse JSON
    app.use(express.json());

    // Basic Routes
    app.get('/', (req, res) => {
        res.send('<h1>Welcome to Express!</h1><p>Check /api/status or /api/user/123</p>');
    });

    app.get('/api/status', (req, res) => {
        res.json({ status: 'ok', uptime: process.uptime() });
    });

    // Route Parameters
    app.get('/api/user/:id', (req, res) => {
        const userId = req.params.id;
        res.json({ id: userId, name: 'Express User', role: 'Tester' });
    });

    // POST Request Example
    app.post('/api/echo', (req, res) => {
        res.json({ received: req.body });
    });

    const server = app.listen(PORT, () => {
        console.log(`Express server running at http://localhost:${PORT}/`);
    });

    // Auto-close after 5 seconds for demonstration
    if (process.env.AUTO_CLOSE) {
        setTimeout(() => {
            console.log('Auto-closing Express server...');
            server.close();
        }, 5000);
    }

} catch (e) {
    console.log('Express module not found.');
    console.log('To run this example, first install express:');
    console.log('npm install express');
    console.log('-------------------------------------------');
    console.log('Mocking output for demonstration purposes:');
    console.log('Server would start on port 3001');
    console.log('Routes: / (GET), /api/status (GET), /api/user/:id (GET), /api/echo (POST)');
}
