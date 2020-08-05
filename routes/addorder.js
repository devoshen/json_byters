const express = require('express')
const router = express.Router();
const Booking = require("../models/bookings.js");
const User = require("../models/customer.js");

router.get("/order",isLoggedIn, function(req, res){
  res.render("order", {})
})

// //********************************* */ BOOKING MODEL ************************
router.post ("/order", function(req, res){
  
  const bookingId = req.body.bookingIdd;
  const bookingDate = req.body.bookingDate;
  const bookingNo = req.body.bookingNo ;
  const travelerCount = req.body.travelerCount;
  const customerId = req.body.customerId;
  const tripTypeId = req.body.tripTypeId;
  const packageId = req.body.packageId;
  const username = req.body.username
  

  const newBooking = {
    BookingId : bookingId,
    BookingDate: bookingDate,
    BookingNo: bookingNo,
    TravelerCount: travelerCount, 
    CustomerId: customerId,
    TripTypeId: tripTypeId,
    PackageId: packageId,
    Username: username
  }
  // create a new customer and save it to DB
  Booking.create(newBooking, function(err, newlyCreated){
    User.findOne({username: username}, function(err,foundUser){
      if(err){
        console.log(err);
      } else {
        foundUser.bookings.push(newlyCreated);
        foundUser.save(function(err, data){
          if(err){
            console.log(err)
          } else {
            console.log(data)
            res.redirect("/thankyou")
          }
        })
      }
    })
  })
})

// router.get("/travelpackages/:id/order", function(req,res){
//   res.render ("order.ejs")
// })
// FUNCTION IS LOGGED IN

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/login")
}
module.exports = router;