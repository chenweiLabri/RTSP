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
  

  //click administration menu
  // .click("[title=\"Administration Menu\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  .click("#system > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")

  //click avatars icom
  // .click("#xo-icon [src=\"http\\:\\/\\/localhost\\:8888\\/XoopsCore25-2\\.5\\.9\\/htdocs\\/modules\\/system\\/images\\/icons\\/transition\\/avatar\\.png\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > A:nth-child(1) > IMG:nth-child(1)")
  .click("#xo-icon > A:nth-child(1) > IMG:nth-child(1)")

  //click icon for system avatars
  // .click("[src=\"http\\:\\/\\/localhost\\:8888\\/XoopsCore25-2\\.5\\.9\\/htdocs\\/modules\\/system\\/images\\/icons\\/transition\\/avatar_system\\.png\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(2) > TR:nth-child(1) > TD:nth-child(1) > A:nth-child(1) > IMG:nth-child(1)")
  .click("#xo-content > TABLE:nth-child(5) > TBODY:nth-child(2) > TR:nth-child(1) > TD:nth-child(1) > A:nth-child(1) > IMG:nth-child(1)")

  //click delete
  // .click("[src=\"http\\:\\/\\/localhost\\:8888\\/XoopsCore25-2\\.5\\.9\\/htdocs\\/modules\\/system\\/images\\/icons\\/transition\\/delete\\.png\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(6) > IMG:nth-child(1)")
  .click("#xo-content > DIV:nth-child(6) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(6) > IMG:nth-child(1)")

  //click submit
  // .click("[name=\"confirm_submit\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > FORM:nth-child(4) > INPUT:nth-child(6)")
  .click("#xo-content > DIV:nth-child(5) > FORM:nth-child(4) > INPUT:nth-child(6)")
  

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