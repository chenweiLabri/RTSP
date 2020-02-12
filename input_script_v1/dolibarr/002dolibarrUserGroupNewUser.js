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

  //click user&group
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)")


  //click new User
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(4) > A:nth-child(1)") 
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(4) > A:nth-child(1)")

  .type("#lastname", "lastName1")
  .type("[maxsize=\"24\"]", "logindine")

  //click create user submit
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(6) > INPUT:nth-child(1)")

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