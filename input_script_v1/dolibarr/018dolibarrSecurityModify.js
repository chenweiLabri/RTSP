"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/dolibarr-6.0.0/htdocs/index.php")
  .goto("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php")
  
  .type("#username", "admin")
  .type("#password", "123456")
  //click login button
  // .click("[value=\"  Login  \"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(16) > DIV:nth-child(2) > INPUT:nth-child(2)")
  .click("#login_line2 > INPUT:nth-child(2)")

  //click setup
  .click("#id-left .blockvmenuimpair:nth-of-type(5) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")

  //click Security in left
  // .click(".menu_contenu_admin_security_other .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(11) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(11) > A:nth-child(1)")

  //type value
  .type('[name="MAIN_SESSION_TIMEOUT"]', "1440")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)", "1440")
  // .type("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)", "1440")


  //click modify button
  .click('[name="button"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > INPUT:nth-child(1)')

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