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
  

  // click the "Site administration"
  // .click("#yui_3_17_2_1_1554899410584_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")
  .click("#nav-drawer > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")

  // click the tag "Courses"
  // .click("#yui_3_17_2_1_1554899630272_41")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")
  .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")

  // click the link "Manage courses and categories"
  // .click("#yui_3_17_2_1_1554899801115_46")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  .click("#linkcourses > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  

  // click the delete button
  // .click("#yui_3_17_2_1_1554899807444_204")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(3) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")
  // .click("#action_link5cade35f3c87744 > I:nth-child(1)")
  .click("#course-listing > DIV:nth-child(1) > UL:nth-child(3) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")

  // click confirm to delete
  // .click("#single_button5cade36acaf8713")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")
  .click("#modal-footer > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")
  
  // cancel and not delete
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")
  // .click("#modal-footer > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")
  



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