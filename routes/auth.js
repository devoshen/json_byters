const express = require('express')
const router = express.Router();
const passport= require('passport');
const User = require("../models/customer.js");
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require ('passport-local-mongoose');

// ***************************************** AUTHENTICATIONS ROUTES******************

router.get("/", function(req, res){
  res.render("index", {})
})
router.get("/login", function(req, res){
  res.render("login", {})
})
router.get("/register", function(req, res){
  res.render("register", {})
})

// ********************************************** COLLECT POST REQUESTS FROM DB*********************************
// // ********************************** CUSTOMER MODEL***********************
router.post ("/register", function(req, res){
  

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const city = req.body.city;
  const prov = req.body.prov;
  const postal = req.body.postal;
  const country = req.body.country;
  const homePhone = req.body.homePhone;
  const busPhone = req.body.busPhone;
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email;

  const newCustomer = {
    
    CustFirstName: firstName,
    CustLastName: lastName,
    CustAddress: address, 
    CustCity: city,
    CustProv: prov,
    CustPostal: postal,
    CustCountry: country,
    CustHomePhone: homePhone,
    CustBusPhone: busPhone,
    username: username,
    CustEmail: email,
   
  }

  User.register(newCustomer, password, function(err, user){
    if (err){
      console.log(err);
      return res.render('register')
    } 
    passport.authenticate("local")(req,res,function(){
      res.render("index")
    })
  })
})


// /  LOGIN ROUTE
router.get("/login", function(req,res){
  res.render("login")
})

router.post("/login",passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect: "/login",
  failureFlash:true
 
}),
function(res,res){
})

// LOGOUT ROUTE

router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/")
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/login")
}

module.exports = router;