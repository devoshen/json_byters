// import modules
const path = require('path');
const express = require('express');
// const moment = require('moment');
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser =require ('body-parser')

const passport= require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require ('passport-local-mongoose');

const User = require("./models/customer.js");
const Package = require('./models/package.js');
const Agency = require('./models/agency.js');
const Agent = require('./models/agent.js');
const { forEach } = require('async');

//  Set up ROUTES for authentifications, and bookings
const authRoutes     = require("./routes/auth")
const addorderRoutes    = require("./routes/addorder")

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

app.use(bodyParser.urlencoded ({extended:true}));

app.use(require('express-session')({
  secret:"once again Rusty wins",
  resave: false,
  saveUninitialized:false
}));

// Always need when working with passwords
app.use(passport.initialize());
app.use(passport.session())
// reading, encoding and uncoding the the login information
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next()
})

app.use(authRoutes)
app.use(addorderRoutes)


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

app.get('/order', function (request, response) {
  response.render('order');
})

app.get('/thankyou', function (request, response) {
  response.render('thankyou');
})

app.get('/contact', function (request, response) {
  Agency.find(function (error, agencies) {
    Agent.find(function (error, agent) {
      data = { agencies_data: agencies, agent_data: agent }
      response.render('contact', { contact_data: data });
    })
  });
})

// trail web page - to be deleted
// app.get('/packages', function (request, response) {
//   response.render('packages');
// })

// to be deleted
// app.get('/test-index', function (request, response) {
//   Package.find(function (error, packages) {
//       response.render('test-index', packages);
//   });
// })



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

app.get('/api/packages', function (request, response) {
  Package.find(function (error, packages) {
    response.json(packages);
  });
})

// FUNCTION IS LOGGED IN

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/login")
}

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