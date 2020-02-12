"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/Joomla_3_5_0/")////version 3.5.0
  // .goto("http://localhost:8888/Joomla_3_6_0/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/")////version 3.7.0
  // .goto("http://localhost:8888/Joomla_3_8_0/")////version 3.8.0
  .goto("http://localhost:8888/Joomla_3_9_0/")////version 3.9.0
  
  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  // click user menu Template Settings
  // .click("[href=\"\\/Joomla\\/index\\.php\\/template-settings\"]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(4) > A:nth-child(1)")
  // .click("#aside > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(4) > A:nth-child(1)")

  .type("#params_sitetitle", "templateTitle")

  //click save
  .click("#templates-form > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")


  // End test
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })
  // Catch errors
  .catch(function (err) {
     console.log(err)
   })