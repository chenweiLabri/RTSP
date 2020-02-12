"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/dolibarr-6.0.0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php")

  .type("#username", "admin")
  .type("#password", "123456")
  //click login button
  // .click("[value=\"  Login  \"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(16) > DIV:nth-child(2) > INPUT:nth-child(2)")
  .click("#login_line2 > INPUT:nth-child(2)")

  //click user&group
  //version5.0
  .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  //version6.0
  // .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")

  //click userlist
  //version5.0
  .click(".menu_contenu:nth-of-type(5) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  //version9.0??
  // .click(".menu_contenu_user_list .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")

  //click item user
  //version5.0
  // .click(".pair .classfortooltip .valignmiddle:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  //repair in version6 and version7
  // .click("#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1)") 
  //version9.0???
  // .click("[aria-describedby] .valignmiddle")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  // .click("#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")

  //click delete button
  //version5.0
  // .click(".tabsAction .divButAction:nth-of-type(5) .butActionDelete")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(5) > A:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(5) > A:nth-child(1)")
  //version9.0??
  // .click(".tabsAction .divButAction:nth-of-type(6) .butActionDelete")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(6) > A:nth-child(1)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(6) > A:nth-child(1)")

  //click cancel NO
  //version5.0
  // .click(".ui-dialog-buttonset [role=\"button\"]:nth-of-type(2) .ui-button-text")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2) > SPAN:nth-child(1)")
  .click("#mainbody > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2) > SPAN:nth-child(1)")
  //version9.0
  // .click(".ui-dialog-buttonset .ui-widget:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(15) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2)")
  // .click("#mainbody > DIV:nth-child(15) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(2)")


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