const path=require('path');
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//for 404 changes

app.use((req,res,next) => {
res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
