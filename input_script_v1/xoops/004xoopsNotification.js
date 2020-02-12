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
  

  //click notification
  // .click("[title=\"Notifications\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(4) > A:nth-child(1)")
  .click("#system > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(4) > A:nth-child(1)")
  

  //click firstbuttion
  // .click("[colspan] [type=\"submit\"]:nth-of-type(1)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)")
  .click("#system > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)")


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