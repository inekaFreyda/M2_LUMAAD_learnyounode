const fs = require('fs');

const content = fs.readFileSync(process.argv[2], 'utf8');

const lineCount = content.split('\n').length - 1;

console.log(lineCount);