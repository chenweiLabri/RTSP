"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/dolibarr-5.0.0/htdocs/index.php")
  .goto("http://localhost:8888/dolibarr-6.0.0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr-8.0.0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr-9.0.0/htdocs/index.php")

  .type("#username", "admin")
  .type("#password", "123456")
  //click login button
  // .click("[value=\"  Login  \"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(16) > DIV:nth-child(2) > INPUT:nth-child(2)")
  .click("#login_line2 > INPUT:nth-child(2)")

  //click setup
  // .click("#id-left .blockvmenuimpair:nth-of-type(5) .vmenu")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")

  //click PDF in left
  // .click(".menu_contenu_admin_pdf .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(13) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(13) > A:nth-child(1)")

  //click button modify
  // .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(15) > A:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > DIV:nth-child(15) > A:nth-child(1)')

  //type value MAIN_PDF_MARGIN_LEFT
  // .type('[name="MAIN_PDF_MARGIN_LEFT"]', '10')
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(2) > INPUT:nth-child(1)', '10')
  .type('#id-right > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(2) > INPUT:nth-child(1)', "10")


  //click save button
  // .click('.fiche .center [type="submit"]:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(15) > INPUT:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(15) > INPUT:nth-child(1)')
  
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