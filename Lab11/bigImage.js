const path = require('path');
const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    // let image = fs.readFileSync(path.join(__dirname,'..','Lab10','clockWrite.jpg'));
    // res.end(image);

    let image = fs.createReadStream(path.join(__dirname,'..','Lab10','clockWrite.jpg'));
    image.pipe(res);
    
}).listen(3000);

const dns = require('dns');
dns.resolve4('www.miu.edu',(err,address) => {
    console.log(address);
});