"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/Joomla_3_5_0/administrator/")////version 3.5.0
  // .goto("http://localhost:8888/Joomla_3_6_0/administrator/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/administrator/")////version 3.7.0
  // .goto("http://localhost:8888/Joomla_3_8_0/administrator/")////version 3.8.0
  .goto("http://localhost:8888/Joomla_3_9_0/administrator/")////version 3.9.0
  
  .type("#mod-login-username", "admin")
  .type("#mod-login-password", "123456")  
  //click login button
  // .click(".login-button")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(4) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //click  Menus
  // .click("[href=\"\\/Joomla\\/administrator\\/index\\.php\\?option\\=com_menus\"]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(4) > LI:nth-child(1) > A:nth-child(1)")
  // .click("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(4) > LI:nth-child(1) > A:nth-child(1)")

  //click checkbox
  // .click("tbody .row0:nth-of-type(1) [name]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > TABLE:nth-child(3) > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(1) > INPUT:nth-child(1)")
  // .click("#cb0")

  //click edit button in version 3.5.0
  // .click("#toolbar-edit .btn-small")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > BUTTON:nth-child(1)")
  // .click("#toolbar-edit > BUTTON:nth-child(1)")
  //version ?? not 3.5.0
  // .click(".button-edit")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > BUTTON:nth-child(1)")
  // .click("#toolbar-edit > BUTTON:nth-child(1)")
  //fix in version3.7.0
  // .click("#menuList > TBODY:nth-child(3) > TR:nth-child(3) > TD:nth-child(2) > DIV:nth-child(2) > A:nth-child(1)")

  .type("#jform_title", "add New menu")
  .type("#jform_menutype", "menu-type")

  //click save and close
  .click("#toolbar-save > BUTTON:nth-child(1)")



  
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