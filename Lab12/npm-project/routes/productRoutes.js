const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/products', (req, res) => {
    console.log(req.body);
    res.send("Successfully submitted");
});

router.get('/products', (req, res) => {
    
    // let products = fs.createReadStream(path.join(__dirname, '..', 'views', 'products.html'), 'utf-8');
    // products.pipe(res);

    fs.readFile(path.join(__dirname,'..','views','products.html'),'utf-8',(err,data) =>{
        res.send(data);
    });
    console.log('inside products');
});

module.exports = router;