//const http = require('http');
const express = require('express');
const app = express();

app.use('/',(req, res, next) => {
  console.log('This always runs!');
  next(); // This is missing in your original code
});
app.use('/add-product',(req, res, next) => {
  console.log('in another middleware!');
  res.send('<h1>The "Add product" page<h1>');
});
app.use('/',(req, res, next) => {
  console.log('in another middleware!');
  res.send('<h1>hello from express!<h1>');
});

//const server = http.createServer(app);

/*server.listen(3001, () => {
  console.log('Server is listening on port 3001');
});*/
app.listen(3001);

