const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extFilter = `.${process.argv[3]}`; 

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err.message);
        return;
    }
    files
        .filter(file => path.extname(file) === extFilter)
        .forEach(file => console.log(file));
});
