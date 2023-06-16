const fs = require('fs');
const path = require('path');

const readable = fs.createReadStream(path.join(__dirname,'Clock.jpg'));
const writeable = fs.createWriteStream(path.join(__dirname,'..','clockWrite.jpg'));

// readable.pipe(writeable);

readable.on('data',function(chunk){
    // console.log(chunk.length);
    writeable.write(chunk);
});