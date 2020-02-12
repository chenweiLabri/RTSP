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
  .click("#login_line2 > INPUT:nth-child(2)")

  //click setup
  // .click('#id-left .blockvmenuimpair:nth-of-type(5) .vmenu')
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)')

  //click company/doundation
  // .click('.menu_contenu_admin_company .vsmenu')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(3) > A:nth-child(1)')
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(3) > A:nth-child(1)')

  //click button modify
  // .click(".butAction")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(11) > DIV:nth-child(1) > A:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > DIV:nth-child(11) > DIV:nth-child(1) > A:nth-child(1)")

  //click cancel button
  // .click("[name=\"cancel\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(11) > INPUT:nth-child(2)")
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(11) > INPUT:nth-child(2)")

  
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