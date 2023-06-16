const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname,'css')));
app.use(express.urlencoded({extended:true}));

app.all('/',(req,res) =>{
    let home = fs.createReadStream(path.join(__dirname,'views','index.html'),'utf-8');
    home.pipe(res);
})


//routing
app.use(productRoutes);
app.use(userRoutes);


//Error handling
app.use((req, res) => {
    throw new Error('404 Error has been thrown');
});

app.use((err, req, res, next) => {
    console.log(err.message);
    fs.readFile(path.join(__dirname, 'views', '404.html'), 'utf-8', (err, data) => {
        res.send(data);
    })
});

app.listen(3000, () => console.log('Server is running'));