"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle-3.4.0/")
  .goto("http://localhost:8888/moodle-3.4.5/")
  // .goto("http://localhost:8888/moodle-3.4.0/login/index.php")
  // .goto("http://localhost:8888/moodle-3.4.5/login/index.php")

  //version 3.4.0 and 3.4.5 can run this action
  .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  //version 3.6.0
  // .click("#page-wrapper > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")
  
  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")
  
  //version 3.4.0
  // .click("#single_button5ca5bb75eb7f81")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)")
  .click("#page-header > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)")
  //version3.6.0
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)")

  //click the LEARNING PLANS
  // version 3.4.0
  .click("#dropdown-8")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > ASIDE:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(1)")
  //version 3.6.0
  // .click("#dropdown-9")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > SECTION:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > A:nth-child(1)")


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