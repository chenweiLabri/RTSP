"use strict";
var Nightmare = require("nightmare");
var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/Joomla_3_5_0/administrator/")////version 3.5.0
  // .goto("http://localhost:8888/Joomla_3_6_0/administrator/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/administrator/")////version 3.7.0
  // .goto("http://localhost:8888/Joomla_3_8_0/administrator/")////version 3.8.0
  // .goto("http://localhost:8888/Joomla_3_9_0/administrator/")////version 3.9.0
  
  .type("#mod-login-username", "admin")
  .type("#mod-login-password", "123456")
  
  //click login button
  // .click(".login-button")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(4) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")


  //click categories
  // .click("[href=\"\\/Joomla_3_5_0\\/administrator\\/index\\.php\\?option\\=com_categories\\&extension\\=com_content\"] .j-links-link")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1) > SPAN:nth-child(2)")
  // .click("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1) > SPAN:nth-child(2)")

  //click the checkbox of one item category
  // .click(".ui-sortable [sortable-group-id=\"1\"]:nth-of-type(2) [name=\"cid\\[\\]\"]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > TABLE:nth-child(2) > TBODY:nth-child(3) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)")
  // .click("#cb1")

  //click publish
  // .click("#toolbar-publish .btn-small")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > BUTTON:nth-child(1)")
  .click("#toolbar-publish > BUTTON:nth-child(1)")

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