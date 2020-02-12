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
  // .click(".blockvmenulast .vmenu")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)")

  //click userlist
  // .click(".menu_contenu_user_index .vsmenu")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(5) > A:nth-child(1)")

  //click item user
  // .click("tr:nth-of-type(4) .valignmiddle")
  .click("#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")

  //click delete button
  .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(6) > A:nth-child(1)")
  // .click(".tabsAction .divButAction:nth-of-type(6) .butActionDelete")

  //click cancel NO  
  // .click(".ui-dialog-buttonset .ui-widget:nth-of-type(2)")
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2)')
  .click('#mainbody > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2)')
  // repair in new version
  // .click('#mainbody > DIV:nth-child(8) > DIV:nth-child(1) > A:nth-child(2)')
  // .click('#mainbody > DIV:nth-child(14) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2)')

  //click delete button
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(6) > A:nth-child(1)")
  .click(".tabsAction .divButAction:nth-of-type(6) .butActionDelete")

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