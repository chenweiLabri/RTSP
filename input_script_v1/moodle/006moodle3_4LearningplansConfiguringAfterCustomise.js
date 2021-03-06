"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle-3.4.0/")
  .goto("http://localhost:8888/moodle-3.4.5/")

  //version 3.4.0 et 3.4.5
  .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  //version 3.5.0 repair
  // .click("#page-footer > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(1)")
  // .click("#page-wrapper > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")


  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")
  
  // .click("#single_button5ca5bb75eb7f81")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)")
  .click("#page-header > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)")

  .click("#dropdown-8")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > ASIDE:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(1)")
  // .click("#yui_3_17_2_1_1554716426216_348 [role=\'button\']");

  .click("#actionmenuaction-33")


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