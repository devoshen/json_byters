// import modules
const path = require('path');
const express = require('express');
// const moment = require('moment');
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Package = require('./models/package.js');

const now_date = new Date();

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function () {
  console.log('Connected to DB...');
});


// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// cors origin URL - Allow inbound traffic from origin
// corsOptions = {
//   origin: "https://dashboard.heroku.com",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));


// sets the current year in footer section using moment module 
// app.use('/', function (req, res, next) {
//   res.locals.currentYear = moment().format('YYYY');
//   next();
// });

// Endpoint handlers to render and serve each page template

app.get('/', function (request, response) {
  Package.find(function (error, packages) {
    response.render('index', packages);
});
})

app.get('/login', function (request, response) {
  response.render('login');
})

app.get('/register', function (request, response) {
  response.render('register');
})

app.get('/contact', function (request, response) {
  response.render('contact');
})


// trail web page - to be deleted
// app.get('/packages', function (request, response) {
//   response.render('packages');
// })

// to be deleted
app.get('/test-index', function (request, response) {
  Package.find(function (error, packages) {
      response.render('test-index', packages);
  });
})



// Display an individual package page when someone browses to an ID

app.get('/travelpackages/:id', function (request, response) {
  // Find the single specific destination in our module
  Package.findOne({ 'PackageId': request.params.id }, function (error, package) {

    // Check for IDs that are not in our list
    if (!package) {
      response.status(404);
      response.send('404: File Not Found');
    }
    response.render('packages', package);
  });
})

// JSON api endpoint
app.get('/test-index/api/packages', function (request, response) {
  Package.find(function (error, packages) {
    response.json(packages);
  });
})


// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function (req, res, next) {
  res.status(404);
  // res.render('404', { 'title': "404" });
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});