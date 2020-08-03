const mongoose = require('mongoose');

// Define our Schema

const packageSchema = new mongoose.Schema(
  {
    PackageId:           Number,
    PkgName:             String,
    PkgStartDate:        Date,
    PkgEndDate:          Date,
    PkgDesc:             String,
    PkgBasePrice:        Number,      
    PkgAgencyCommission: Number
  }
);

// Compile and export model using the above Schema.
module.exports = mongoose.model('Package', packageSchema);
