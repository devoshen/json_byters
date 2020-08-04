const express = require('express')
const router = express.Router();
const Booking = require("../models/bookings.js");

router.get("/order", function(req, res){
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
  

  const newBooking = {
    BookingId : bookingId,
    BookingDate: bookingDate,
    BookingNo: bookingNo,
    TravelerCount: travelerCount, 
    CustomerId: customerId,
    TripTypeId: tripTypeId,
    PackageId: packageId,
    
  }
  // create a new customer and save it to DB
  Booking.create(newBooking, function(err, newlyCreated){
    if(err){
      console.log(err)
    } else {
      console.log(newBooking)
      res.send("you booked it")
    }
  })

})

router.get("/travelpackages/:id/order", function(req,res){
  res.render ("order.ejs")
})

module.exports = router;