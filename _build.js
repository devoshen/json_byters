const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require('./seeds/packages.js');

// Define model
const Package = require('./models/package.js');

// Mongoose/MongoDB Connection 


const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');
  Package.insertMany(dbSeed, function(error, package) {
    console.log('Data import completed.')
    mongoose.connection.close();
  });
});