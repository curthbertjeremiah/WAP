const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const prodRouter = require('./routes/productrouter');
const productRouter = require('./routes/productrouter');
const { throws } = require('assert');
const { error } = require('console');

// const jsonParser = express.urlencoded({ extended: false });

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development')
app.disable('case sensitive routing');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.use('/middleware', (req, res, next) => {
    console.log('this is middleware');
    // res.send('Hi middleware');
    next();
});

app.use('/add-product', (req, res) => {
    console.log('second middleware');
    let form = fs.readFileSync(path.join(__dirname, 'add-product.html'), 'utf-8');
    res.send(form);
})

app.use('/search', (req, res) => {
    console.log(req.query);
    res.send("querried successfully");
})

app.get('/api/:id/:name/:city', (req, res) => {
    console.log(req.params);
    res.send('Params received')
})

app.use('/submit', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use(prodRouter);

app.use((req,res,next) => {
    throw new Error('Error message here');
});


//Error handling

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(404).send('404 Error, page has jam');
});

app.listen(3000, () => console.log('Your server is running at port 3000'));