/**
 * Example 05: Async Patterns
 * 
 * This example demonstrates modern asynchronous programming in Node.js
 * using Promises and the Async/Await syntax. It compares the older
 * callback-based approach with modern methods.
 */

// 1. Simulating an asynchronous operation with a Promise
const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ID: ${id}...`);
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, data: 'Sample Data' });
            } else {
                reject(new Error('Invalid ID'));
            }
        }, 1500);
    });
};

// 2. Using Promises with .then() and .catch()
console.log('--- Using .then() ---');
fetchData(1)
    .then(data => {
        console.log('Success (then):', data);
        return fetchData(2); // Chaining
    })
    .then(data => {
        console.log('Success (chained then):', data);
    })
    .catch(err => {
        console.error('Error (then):', err.message);
    });

// 3. Using Async/Await (Cleaner, more synchronous look)
const runAsync = async () => {
    try {
        console.log('\n--- Using Async/Await ---');
        const data1 = await fetchData(10);
        console.log('Success (await 1):', data1);

        const data2 = await fetchData(20);
        console.log('Success (await 2):', data2);

        // Example of handling an error
        console.log('\n--- Error Handling in Async/Await ---');
        await fetchData(-1);
    } catch (err) {
        console.error('Error (await):', err.message);
    } finally {
        console.log('\nAsync operations completed.');
    }
};

// Delaying Async/Await execution slightly so it doesn't interleave confusingly with .then() example
setTimeout(runAsync, 4000);
