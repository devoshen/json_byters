const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define our Schema

const packageSchema = new mongoose.Schema(
  {
    
    PkgName:             String,
    PkgStartDate:        Date,
    PkgEndDate:          Date,
    PkgDesc:             String,
    PkgBasePrice:        Number,      
    PkgAgencyCommission: Number,
    path:                String,
  }
);

// Compile and export model using the above Schema.
packageSchema.plugin(AutoIncrement, {inc_field: 'PackageId', start_seq: 10 })
module.exports = mongoose.model('Package', packageSchema);
