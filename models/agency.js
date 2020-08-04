const mongoose = require('mongoose');

// Define our Schema

const agencySchema = new mongoose.Schema(
  {
    AgencyId:     Number,
    AgncyAddress: String,
    AgncyCity:    String,
    AgncyProv:    String,
    AgncyPostal:  String,
    AgncyCountry: String,
    AgncyPhone:   String,
    AgncyFax:     String
  }
);

// Compile and export model using the above Schema.
module.exports = mongoose.model('Agency', agencySchema);
