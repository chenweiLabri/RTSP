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

  //click Admin Tools
  // .click("#id-left .blockvmenupair:nth-of-type(6) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")

  //click ScheduledJobs in left
  .click(".menu_contenu_cron_list .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(17) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(17) > A:nth-child(1)")

  //click create new schedule button
  // .click('[href="\/dolibarr-6\.0\.0\/htdocs\/cron\/card\.php\?action\=create"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > A:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > A:nth-child(1)')
  // repair in version 7
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)')
  
  //click cancel button
  // .click('[align] .button:nth-of-type(2)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(6) > INPUT:nth-child(2)')
  .click('#id-right > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(6) > INPUT:nth-child(2)')
  

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