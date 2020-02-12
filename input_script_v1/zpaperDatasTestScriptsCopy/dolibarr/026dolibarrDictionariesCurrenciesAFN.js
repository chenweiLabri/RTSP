"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/dolibarr-5.0.0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr-6.0.0/htdocs/index.php")
  .goto("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php")
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

  //click Dictionaries in left
  // .click(".menu_contenu_admin_dict .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(16) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(16) > A:nth-child(1)")

  //click the Currencies
  // .click('[href="\/dolibarr-6\.0\.0\/htdocs\/admin\/dict\.php\?id\=9"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  

  //click AFN on status
  // .click('[href="\/dolibarr-6\.0\.0\/htdocs\/admin\/dict\.php\?sortfield\=label\&sortorder\=\&rowid\=AFN\&code\=AFN\&\&id\=9\&action\=disable"] .valigntextbottom')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(4) > A:nth-child(1) > IMG:nth-child(1)')
  .click('#rowid- > TD:nth-child(4) > A:nth-child(1) > IMG:nth-child(1)')

  //click AFN off status
  // .click('[href="\/dolibarr-6\.0\.0\/htdocs\/admin\/dict\.php\?sortfield\=label\&sortorder\=\&rowid\=AFN\&code\=AFN\&\&id\=9\&action\=activate"] .valigntextbottom')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(4) > A:nth-child(1) > IMG:nth-child(1)')
  .click('#rowid- > TD:nth-child(4) > A:nth-child(1) > IMG:nth-child(1)')
  
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