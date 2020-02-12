"use strict";
var Nightmare = require("nightmare");
var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/Joomla_3_6_0/")////version 3.6.0
  .goto("http://localhost:8888/Joomla_3_7_0/")////version 3.7.0
  
  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  // click Latest articles
  // .click("a [itemprop]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")
  .click("#aside > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")


  // .click("[itemprop] p:nth-child(19) [target=\"_blank\"]:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(5) > P:nth-child(19) > A:nth-child(2)")
  .click("#content > DIV:nth-child(3) > DIV:nth-child(5) > P:nth-child(19) > A:nth-child(2)")

  
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


// //version 3.9
// "use strict";
// var Nightmare = require("nightmare");
// var nightmare = Nightmare({
//   show: true
// });

// nightmare
//   // Visit login page
//   .goto("http://localhost:8888/Joomla/")
//   .type("#modlgn-username", "admin")
//   .type("#modlgn-passwd", "123456")
//   .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

//   // click Latest articles
//   // .click("a [itemprop]")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")
//   .click("#aside > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")

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
//   