const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//middlewares

router.use('/router-product', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'add-product.html'), 'utf-8', (err, data) => {
        console.log('router product file is read');
        res.send(data);
    });
});



module.exports = router;