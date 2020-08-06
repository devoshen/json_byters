const express = require('express')
const router = express.Router();
const Booking = require("../models/bookings.js");
const BookingDetail = require("../models/bookingdetail.js");
const User = require("../models/customer.js");
const Package = require('../models/package.js');

router.get("/order/:id", isLoggedIn, function (req, res) {
  Package.findOne({ 'PackageId': req.params.id }, function (error, package) {

    // Check for IDs that are not in our list
    if (!package) {
      res.status(404);
      res.send('404: File Not Found');
    }

    let startdate = new Date(package.PkgStartDate);
    let formatted_pack_strtdate = startdate.getFullYear() + "/" + (startdate.getMonth() + 1) + "/" + startdate.getDate();

    let enddate = new Date(package.PkgEndDate);
    let formatted_pack_enddate = enddate.getFullYear() + "/" + (enddate.getMonth() + 1) + "/" + enddate.getDate();

    let packagename = package.PkgName;

    data = {startdate : formatted_pack_strtdate, enddate : formatted_pack_enddate, pck_name : packagename}
    
    res.render('order', {orderdata : data});
  });
})

// //********************************* */ BOOKING MODEL ************************
router.post("/order", function (req, res) {

  const bookingDetailId = req.body.bookingDetailId;
  const itineraryNo = req.body.itineraryNo;
  const tripStart = req.body.tripStart;
  const tripEnd = req.body.tripEnd;
  const description = req.body.description;
  const destination = req.body.destination;
  const basePrice = req.body.basePrice;
  const agencyCommission = req.body.agencyCommission;
  const bookingId = req.body.bookingId;
  const regionId = req.body.regionId;
  const classId = req.body.classId;
  const feeId = req.body.feeId;
  const productSupplierId = req.body.productSupplierId;
  const username = req.body.Username;

  const newBookingDetail = {
    BookingDetailId: bookingDetailId,
    ItineraryNo: itineraryNo,
    TripStart: tripStart,
    TripEnd: tripEnd,
    Description: description,
    Destination: destination,
    BasePrice: basePrice,
    AgencyCommission: agencyCommission,
    BookingId: bookingId,
    RegionId: regionId,
    ClassId: classId,
    FeeId: feeId,
    ProductSupplierId: productSupplierId,
    Username: username
  }

  const newBooking = {
    BookingId: bookingId,
    Username: username
  }

  BookingDetail.create(newBookingDetail, function (err, newlyCreated) {
        Booking.create(newBooking, function (err, createBooking) {
         User.findOne({ username: username }, function (err, foundUser) {
            if (err) {
              console.log(err);
            } else {
              foundUser.bookings.push(createBooking);
              foundUser.save(function (err, data) {
                if (err) {
                  console.log(err)
                } else {
                  // console.log(username)
                 
                  Booking.findOne({ Username: username }, function (err, foundBooking) {
                    if (err) {
                      console.log(err);
                    } else {
                      // console.log(foundBooking)
                      foundBooking.bookingdetail.push(newlyCreated);
                      foundBooking.save(function (err, data) {
                        if (err) {
                          console.log(err)
                        } else {
                          // console.log(data)
                          count = 
                          senddata = data.BookingId
                          console.log(data)
                          res.render("thankyou",{data : senddata})
                        }
                      })
                    }
              })
            }
          })
        }
      })
    })
  })
})

// router.get("/travelpackages/:id/order", function(req,res){
//   res.render ("order.ejs")
// })
// FUNCTION IS LOGGED IN

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/login")
}
module.exports = router;

