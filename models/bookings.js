const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bookingSchema = new mongoose.Schema(
  {
    BookingDate: Date,
    BookingNo: String,
    TravelerCount: Number,
    CustomerId: Number,
    TripTypeId: String,
    PackageId: String,
    Username: String,
    bookingdetail: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookingDetail"
      }
    ]

  });

bookingSchema.plugin(AutoIncrement, { inc_field: 'BookingId', start_seq: 2000 })
module.exports = mongoose.model('Booking', bookingSchema);
