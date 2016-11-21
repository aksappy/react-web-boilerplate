var fs = require('fs')
console.log("**** CLEANING FOLDER ***** ");
// path should have trailing slash
function removeDirForce(dirPath) {
    fs.readdir(dirPath, function(err, files) {
        files.forEach(function(element, index) {
            var filePath = dirPath + '/' + element;
            fs.unlink(filePath);
        });
    });
}

removeDirForce('./src/client/public')
