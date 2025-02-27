const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('Only POST requests are allowed\n');
    }

    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(body.toUpperCase());
    });

    req.on('error', (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error\n');
    });
});

server.listen(port, () => {
    console.log(`HTTP uppercase server listening on port ${port}`);
});
