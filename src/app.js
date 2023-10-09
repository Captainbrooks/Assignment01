const express = require('express');
const app = express();
const port = process.env.PORT || 7000; // You can choose your desired port number

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import the routes from routes/index.js
const routes = require('./routes/index');

// Use the routes
app.use('/', routes);

// Serve static files from the 'public' directory (if you have static assets)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
