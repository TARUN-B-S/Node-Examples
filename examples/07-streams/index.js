/**
 * Example 07: Streams
 * 
 * This example demonstrates how to process data using Streams. Streams
 * are essential for handling large files or real-time data efficiently 
 * by processing it in chunks without loading everything into memory.
 */

const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// 1. Create a large dummy file for the demonstration
console.log('Creating a large file for stream demo...');
const writeStream = fs.createWriteStream(inputPath);
for (let i = 0; i < 10000; i++) {
    writeStream.write(`This is line number ${i} in our large file.\n`);
}
writeStream.end();

writeStream.on('finish', () => {
    console.log('Dummy file created. Now processing with streams...');

    // 2. Use a ReadStream and WriteStream (Piping)
    const readStream = fs.createReadStream(inputPath);
    const destStream = fs.createWriteStream(outputPath);

    // Pipe the data from input to output
    readStream.pipe(destStream);

    readStream.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
    });

    destStream.on('finish', () => {
        console.log('Finished streaming data to output.txt');

        // Clean up
        setTimeout(() => {
            // fs.unlinkSync(inputPath);
            // fs.unlinkSync(outputPath);
            console.log('Example complete.');
        }, 1000);
    });

    readStream.on('error', (err) => {
        console.error('Error reading:', err.message);
    });

    destStream.on('error', (err) => {
        console.error('Error writing:', err.message);
    });
});
