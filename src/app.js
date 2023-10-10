const express = require('express');
const app = express();


// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Importing  the routes from src/routes/index.js
const routes = require('./routes/index');

// Use the routes
app.use('/', routes);

// Servinf the  static files from the 'public' directory 
app.use(express.static('public'));

// start of the server with port= 7000

const port=7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
