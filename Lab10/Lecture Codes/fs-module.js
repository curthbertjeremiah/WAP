const fs = require('fs');
const path = require('path');
console.log(__dirname);
const allArrays = fs.readFileSync(path.join(__dirname,'greet.txt'),'utf8');
console.log(allArrays);

fs.readFile(path.join(__dirname, 'greet.txt'),'utf-8',function(err,data){console.log(data);});

console.log('Done!');