const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Step 1: Define our Schema
// See: https://mongoosejs.com/docs/guide.html
/*
"Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection."
*/
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
      ref:"BookingDetail"
      }
    ]

  });

// Compile and export our model using the above Schema.
// See: https://mongoosejs.com/docs/models.html 
bookingSchema.plugin(AutoIncrement, {inc_field: 'BookingId', start_seq: 1300 })
module.exports = mongoose.model('Booking', bookingSchema );

// Important: The first argument of mongoose.model() is the singular name of the collection your model is for. 
// ** Mongoose automatically looks for the plural, lowercased version of your model name. **"
// In our example, we name our model 'Definition' and mongoose will automatically look for the collection 'definitions' 