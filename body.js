//const http = require('http');
const express = require('express');
const bodyparser=require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req, res, next) => {
  
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">addproduct</button></form>')
});
app.post('/product',(req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/',(req, res, next) => {
  
  res.send('<h1>hello from express!<h1>');
});

//const server = http.createServer(app);

/*server.listen(3001, () => {
  console.log('Server is listening on port 3001');
});*/
app.listen(3001);

