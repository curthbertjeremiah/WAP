const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/users', (req, res) => {
        console.log('inside users');
        console.log(req.body);
    // const users = fs.createReadStream(path.join(__dirname, '..', 'views', 'users.html'), 'utf-8');
    // users.pipe(res);
    res.send("User registered!")
});


router.get('/users', (req, res) => {
    console.log('inside users');
    const users = fs.createReadStream(path.join(__dirname, '..', 'views', 'users.html'), 'utf-8');
    users.pipe(res);
});


module.exports = router;