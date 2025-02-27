const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');

    let collectedData = '';

    response.on('data', (chunk) => {
        collectedData += chunk;
    });

    response.on('end', () => {
        console.log(collectedData.length);
        console.log(collectedData);
    });

    response.on('error', (err) => console.error('Error:', err.message));
}).on('error', (err) => console.error('Request Error:', err.message));
