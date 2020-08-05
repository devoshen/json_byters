const mongoose = require('mongoose');
const passportLocalMongoose = require ('passport-local-mongoose');

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
      ref:"Bookings"
      }
    ]
    
  });

// Compile and export our model using the above Schema.
// See: https://mongoosejs.com/docs/models.html 
customerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Customer', customerSchema );

// Important: The first argument of mongoose.model() is the singular name of the collection your model is for. 
// ** Mongoose automatically looks for the plural, lowercased version of your model name. **"
// In our example, we name our model 'Definition' and mongoose will automatically look for the collection 'definitions' 