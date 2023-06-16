const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    res.end(html);
}).listen(3000);

