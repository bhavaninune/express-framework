const path=require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();
// my own files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// creating the page using routes files
app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


// Creating server and port
app.listen(4005);