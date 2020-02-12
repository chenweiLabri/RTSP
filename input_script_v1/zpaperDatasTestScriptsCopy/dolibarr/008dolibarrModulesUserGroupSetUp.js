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
  .click("#id-left .blockvmenuimpair:nth-of-type(5) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")

  //click modules
  // .click(".menu_contenu_admin_modules .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(4) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(4) > A:nth-child(1)")

  //click setup icon in Users & groups
  .click('.tabBar .div-table-responsive:nth-child(8) tr:nth-of-type(1) a [title="Setup"]')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)")
  // .click("#searchFormList > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)")

  //click on button
  // .click("#set_USER_MAIL_REQUIRED .valigntextbottom")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > SPAN:nth-child(3) > IMG:nth-child(1)")
  // .click("#set_USER_MAIL_REQUIRED > IMG:nth-child(1)")
  //version 7
  


  //click off button
  // .click('#del_USER_MAIL_REQUIRED .valigntextbottom');
  .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > SPAN:nth-child(4) > IMG:nth-child(1)');
  // .click('#del_USER_MAIL_REQUIRED > IMG:nth-child(1)');

  
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