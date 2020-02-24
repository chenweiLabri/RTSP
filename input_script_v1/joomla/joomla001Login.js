"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/Joomla_3_6_0/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/")////version 3.7.0

  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")

  //click submit to login version3.5
  // .click(".btn-primary")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > FORM:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //click login out
  // .click(".btn-primary")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(4) > FORM:nth-child(2) > DIV:nth-child(2) > INPUT:nth-child(1)")
  .click("#login-form > DIV:nth-child(2) > INPUT:nth-child(1)")

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



// "use strict";
// var Nightmare = require("nightmare");
// var nightmare = Nightmare({
//   show: true
// });

// nightmare
//   // Visit login page
//   .goto("http://localhost:8888/Joomla/") //version3.9.4
//   .goto("http://localhost:8888/Joomla3_5/Joomla_3.5.0-Stable-Full_Package/") //version 3.5.0
//   .type("#modlgn-username", "admin")
//   .type("#modlgn-passwd", "123456")

//   //click submit to login  version3.9  the action to repair candidates
//   .click(".login-button")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > FORM:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")
//   // .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

//   //click login out
//   // .click(".btn-primary")
//   .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(4) > FORM:nth-child(2) > DIV:nth-child(2) > INPUT:nth-child(1)")
//   // .click("#login-form > DIV:nth-child(2) > INPUT:nth-child(1)")

//   // End test
//   .end()
//   // Execute commands
//   .then(function () {
//     console.log("Done!")
//   })
//   // Catch errors
//   .catch(function (err) {
//      console.log(err)
//    })