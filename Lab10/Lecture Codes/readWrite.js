const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'greet.txt'),'utf-8',function(err,data){
    if (err) throw err;
    console.log(data.replace('{name}','John Smith'));

    fs.writeFile(path.join(__dirname,'greet.txt'), data.replace('{name}','John2 Smith'), (err) => {
        if (err) throw err;
        console.log('replace done');
    });
});

// fs.writeFile(path.join(__dirname,'greet2.txt'),'write file',(err) => {
//     if(err) throw err;
//     console.log('Done writing');
// })