const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const customerSchema = new mongoose.Schema(
  {
    CustFirstName: String,
    CustLastName: String,
    CustAddress: String,
    CustCity: String,
    CustProv: String,
    CustPostal: String,
    CustCountry: String,
    CustHomePhone: String,
    CustBusPhone: String,
    username: String,
    password: String,
    CustEmail: String,
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bookings"
      }
    ]
  });

customerSchema.plugin(AutoIncrement, { inc_field: 'CustomerId', start_seq: 144 })
customerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Customer', customerSchema);
