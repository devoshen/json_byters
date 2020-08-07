const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bookingdetailSchema = new mongoose.Schema(
  {
    ItineraryNo        : Number,
    TripStart          : Date,
    TripEnd            : Date, 
    Description        : String,
    Destination        : String,
    BasePrice          : Number,
    AgencyCommission   : Number,
    BookingId          : Number,
    RegionId           : Number,
    ClassId            : Number,
    FeeId              : Number,
    ProductSupplierId  : Number,
    Username           : String,   
  });

bookingdetailSchema.plugin(AutoIncrement, {inc_field: 'BookingDetailId', start_seq: 2000 })
module.exports = mongoose.model('BookingDetail', bookingdetailSchema );
