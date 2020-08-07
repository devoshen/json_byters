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
    let packageid = package.PackageId;
    data = { startdate: formatted_pack_strtdate, enddate: formatted_pack_enddate, pck_name: packagename, pck_id: packageid }

    res.render('order', { orderdata: data });
  });
})

// //********************************* */ BOOKING MODEL ************************

//  CREATE a new booking to add to database
router.post("/order/:id", function (req, res) {

  const bookingDetailId = req.body.bookingDetailId;
  const itineraryNo = req.body.itineraryNo;
  const tripStart = req.body.tripStart;
  const tripEnd = req.body.tripEnd;
  const description = req.body.description;
  const destination = req.body.destination;
  const basePrice = req.body.basePrice;
  const agencyCommission = req.body.agencyCommission;
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
    RegionId: regionId,
    ClassId: classId,
    FeeId: feeId,
    ProductSupplierId: productSupplierId,
    Username: username
  }

  const newBooking = {
    Username: username,
    PackageId: req.params.id,
  }
//  The request to create bookingID and bookign details based on username
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

              Booking.findOne({ BookingId: createBooking.BookingId }, function (err, foundBooking) {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(foundBooking)
                  foundBooking.bookingdetail.push(newlyCreated);
                  foundBooking.save(function (err, data) {
                    if (err) {
                      console.log(err)
                    } else {
                      BookingDetail.findOne({ Username: username }, function (err, foundDetails) {
                        if (err) {
                          console.log(err)
                        } else {
                          console.log(foundDetails)
                          
                          let startdate = new Date(foundDetails.TripStart);
                          let formatted_pack_strtdate = startdate.getFullYear() + "/" + (startdate.getMonth() + 1) + "/" + startdate.getDate();

                          let enddate = new Date(foundDetails.TripEnd);
                          let formatted_pack_enddate = enddate.getFullYear() + "/" + (enddate.getMonth() + 1) + "/" + enddate.getDate();

                          data = { booking: data, details: foundDetails, enddate: formatted_pack_enddate, startdate: formatted_pack_strtdate}
                          
                          res.render("thankyou", { data: data })
                         
                        }
                      })
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

// Function to check if the user is validated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/login")
}
module.exports = router;

