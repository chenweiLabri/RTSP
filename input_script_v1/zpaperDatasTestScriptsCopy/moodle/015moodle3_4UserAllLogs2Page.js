"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle-3.4.0/")
  // .goto("http://localhost:8888/moodle-3.4.5/")
  .goto("http://localhost:8888/moodle-3.5.0/")
  // .goto("http://localhost:8888/moodle-3.6.0/")
  // .goto("http://localhost:8888/moodle-3.6.3/")
  
  //version3.4.0
  // .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  //version3.5.0
  .click("#page-wrapper > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")

  .type("#username", "admin")
  .type("#password", "ChenWei!123")
  .click("#loginbtn")
  
  //click admin user
  // .click("#yui_3_17_2_1_1554811125138_20 > A:nth-child(1)")  
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#inst115 > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")
  //version 3.5.0
  .click("#inst10 > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")

  //version 3.4.0
  // .click("#yui_3_17_2_1_1554843919680_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(2) > SPAN:nth-child(1) > A:nth-child(1)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(2) > SPAN:nth-child(1) > A:nth-child(1)")
  //version3.5.0
  .click("#region-main > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(2) > SPAN:nth-child(1) > A:nth-child(1)")


  // .click("#yui_3_17_2_1_1554844239508_535")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > NAV:nth-child(4) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > NAV:nth-child(4) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)")
  //version 3.5.0
  .click("#region-main > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > NAV:nth-child(4) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)")
  
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