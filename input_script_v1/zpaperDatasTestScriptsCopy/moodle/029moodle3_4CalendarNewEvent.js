"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle-3.4.0/")
  .goto("http://localhost:8888/moodle-3.4.5/")
  // .goto("http://localhost:8888/moodle-3.5.0/")
  // .goto("http://localhost:8888/moodle-3.6.0/")
  // .goto("http://localhost:8888/moodle-3.6.3/")
  
  .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  .type("#username", "admin")
  .type("#password", "ChenWei!123")
  .click("#loginbtn")


  //click calendar on left side
  // .click("#yui_3_17_2_1_1554907815605_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1)")
  .click("#nav-drawer > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1)")

  // click new event
  // .click("#yui_3_17_2_1_1554907820630_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")
  .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")

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