const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, extFilter, callback) {
    fs.readdir(dirPath, (err, files) => {
        if (err) return callback(err);

        const filteredFiles = files.filter(file => path.extname(file) === `.${extFilter}`);

        callback(null, filteredFiles);
    });
};
