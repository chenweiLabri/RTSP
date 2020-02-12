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

  //click UsersSession in left
  // .click(".menu_contenu_admin_tools_listsessions .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(14) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(14) > A:nth-child(1)")

  //click purge of session button
  // .click('.butActionDelete')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)')
  .click('#id-right > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)')

  //click yes
  .click('.ui-dialog-buttonset .ui-widget:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')
  // .click('#mainbody > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')
  // repair in version 7
  // .click('#mainbody > DIV:nth-child(13) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')

  // click Lock new connections
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(1)')
  // .click('.butAction')

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