"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/XoopsCore25-2.5.9/htdocs/index.php")
  .type("#system > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > DIV:nth-child(1) > INPUT:nth-child(1)", "admin")
  .type("[type=\"password\"]", "123456")  
  //click login button
  .click("#system > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > INPUT:nth-child(6)")
  

  //click edit account
  // .click("[title=\"Edit Account\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(3) > A:nth-child(1)")
  .click("#system > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(3) > A:nth-child(1)")

  .type("#name", "nononame")

  // click submit
  // .click("[value=\"Save Changes\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(5) > FORM:nth-child(1) > DIV:nth-child(22) > DIV:nth-child(2) > INPUT:nth-child(1)")
  .click("#submit")


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