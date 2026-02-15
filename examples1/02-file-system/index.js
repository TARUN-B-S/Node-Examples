/**
 * Example 02: File System (fs)
 * 
 * This example demonstrates basic file operations using the built-in 'fs' module.
 * Node.js provides both synchronous and asynchronous ways to interact with the file system.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

// 1. Writing to a file asynchronously
fs.writeFile(filePath, 'Hello from Node.js file system!', (err) => {
    if (err) {
        return console.error('Error writing file:', err);
    }
    console.log('File written successfully.');

    // 2. Reading from a file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('File content:', data);

        // 3. Appending to a file
        fs.appendFile(filePath, '\nThis is an appended line.', (err) => {
            if (err) {
                return console.error('Error appending to file:', err);
            }
            console.log('Content appended.');

            // Final check
            const finalData = fs.readFileSync(filePath, 'utf8');
            console.log('Final content:\n', finalData);
        });
    });
});
