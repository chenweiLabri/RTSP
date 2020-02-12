"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/Joomla_3_5_0/")////version 3.5.0
  // .goto("http://localhost:8888/Joomla_3_6_0/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/")////version 3.7.0
  // .goto("http://localhost:8888/Joomla_3_8_0/")////version 3.8.0
  // .goto("http://localhost:8888/Joomla_3_9_0/")////version 3.9.0
  
  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //click link to Administrator
  // .click("[href=\"\\/Joomla\\/administrator\"]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1)")
  // .click("#aside > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1)")

  .type("#mod-login-username", "admin")
  .type("#mod-login-password", "123456")
  
  //click login button
  // .click(".login-button")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(4) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //click login out
  // .click(".btn-group [href=\"\\/Joomla_3_5_0\\/administrator\\/index\\.php\\?option\\=com_login\\&task\\=logout\\&10abc0b0c2e8b5ac8b3cbf746c67d36b\\=1\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(7) > A:nth-child(1)")
  .click("#status > DIV:nth-child(1) > DIV:nth-child(7) > A:nth-child(1)")

  //fix in 3.7.0 find the candidate for login out..    version 3.8 and 3.9 are same
  // .click("#status > DIV:nth-child(1) > DIV:nth-child(6) > A:nth-child(1)")


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