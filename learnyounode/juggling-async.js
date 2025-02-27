const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.setEncoding('utf8');

        let collectedData = '';

        response.on('data', (chunk) => {
            collectedData += chunk;
        });

        response.on('end', () => {
            results[index] = collectedData;
            count++;

            if (count === urls.length) {
                results.forEach(data => console.log(data));
            }
        });

        response.on('error', (err) => console.error('Error:', err.message));
    }).on('error', (err) => console.error('Request Error:', err.message));
});
