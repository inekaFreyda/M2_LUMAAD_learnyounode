const myModule = require('./mymodule.js');

const dirPath = process.argv[2];
const extFilter = process.argv[3];

myModule(dirPath, extFilter, (err, files) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }

    files.forEach(file => console.log(file));
});
