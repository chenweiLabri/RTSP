  var Nightmare = require("nightmare");
  var nightmare = Nightmare({  show: true});
  nightmare
  // .goto("http://localhost:8888/Joomla_3_6_0/administrator/")
  .goto("http://localhost:8888/Joomla_3_7_0/administrator/")
  .type("#mod-login-username", "admin")
  .type("#mod-login-password", "123456")  
  //click login button
  // .click(".login-button")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(4) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#menu > LI:nth-child(3) > A:nth-child(1)")
  .click("#menu > LI:nth-child(3) > UL:nth-child(2) > LI:nth-child(6) > A:nth-child(1)")
  .click("#j-toggle-sidebar-icon")

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