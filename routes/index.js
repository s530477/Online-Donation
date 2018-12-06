const express = require('express');
const router = express.Router();
//var flash = require('express-flash-messages')
//router.use(flash())

router.all("/", function (request, response) {  
    response.render('home.ejs');
  });

  router.get("/userSignup", function (request, response) {  
    response.render('userSignup.ejs');
  });

  router.get("/userLogin", function (request, response) {  
    response.render('userLogin.ejs');
  });

  router.get("/userHome", function (request, response) {  
    response.render('userHome.ejs');
  });
  router.get("/rulesandregulations", function (request, response) {  
    response.render('rulesandregulations.ejs');
  });

  router.get("/headerAdmin", function (request, response) {  
    response.render('headerAdmin.ejs');
  });

  router.get("/donations", function (request, response) {  
    response.render('donations.ejs');
  });

  
  router.get("/donate", function (request, response) {  
    response.render('donate.ejs');
  });

  router.get("/donateForCampaign", function (request, response) {  
    response.render('donateForCampaign.ejs');
  });

  router.get("/adminLogin", function (request, response) {  
    response.render('adminLogin.ejs');
  });
  module.exports = router ;