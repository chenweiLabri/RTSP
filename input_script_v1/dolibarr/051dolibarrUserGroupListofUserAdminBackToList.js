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

  //click User and Group
  // .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)")

  //click list of  Users in the left
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(5) > A:nth-child(1)')
  
  //click admin member in the list
  .click('#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)')
  // .click('tr:nth-of-type(3) .inline-block.valignmiddle')

  // click Back to list
  .click('[href="\/dolibarr-6\.0\.0\/htdocs\/user\/index\.php"]')
  // repair success in version 7
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)')

  //click one member in the list
  .click('#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)')
  // .click('tr:nth-of-type(3) .inline-block.valignmiddle')

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