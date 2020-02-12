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
  // .click("[value=\"  Login  \"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(16) > DIV:nth-child(2) > INPUT:nth-child(2)")
  .click("#login_line2 > INPUT:nth-child(2)")

  //click setup
  // .click('#id-left .blockvmenuimpair:nth-of-type(5) .vmenu')
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)')

  //click modules
  // .click('.menu_contenu_admin_modules .vsmenu')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(4) > A:nth-child(1)')
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(4) > A:nth-child(1)')

  //click setup icon in Users & groups
  // .click('.tabBar .div-table-responsive:nth-child(8) tr:nth-of-type(1) a [title="Setup"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)')
  .click('#searchFormList > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)')

  //click Group Tag button
  .click("#usergroupcard")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(3) > A:nth-child(1)")
  // .click("#usergroupcard")
 
  //type ODT templates
  .type("[cols]", "DOL_DATA_ROOT/doctemplates/usergroups");
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(4) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > TEXTAREA:nth-child(1)", "DOL_DATA_ROOT/doctemplates/usergroups");
  // .type("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(4) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > TEXTAREA:nth-child(1)", "DOL_DATA_ROOT/doctemplates/usergroups");


  //click modify button
  .click('[value="Modify"]');
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(4) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > INPUT:nth-child(1)');
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > FORM:nth-child(2) > TABLE:nth-child(4) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > INPUT:nth-child(1)');
  
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