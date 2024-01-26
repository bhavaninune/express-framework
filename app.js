const path=require('path');
const express=require('express');
const bodyparser=require('body-parser');
const errorController=require('./controllers/error');
const sequelize=require('./util/database');
const app=express();
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//for 404 changes
app.use(errorController.get404);
sequelize
.sync()
.then(result=>{
    console.log(result);
    app.listen(3000);
})
.catch(err=>{
    console.log(error);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
