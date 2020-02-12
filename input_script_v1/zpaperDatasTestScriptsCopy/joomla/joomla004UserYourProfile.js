"use strict";
var Nightmare = require("nightmare");
var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/Joomla_3_5_0/")////version 3.5.0
  // .goto("http://localhost:8888/Joomla_3_6_0/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/")////version 3.7.0
  // .goto("http://localhost:8888/Joomla_3_8_0/")////version 3.8.0
  // .goto("http://localhost:8888/Joomla_3_9_0/")////version 3.9.0
  
  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  // click user menu Your Profile
  // .click("[href=\"\\/Joomla\\/index\\.php\\/your-profile\"]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")
  // .click("#aside > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")

  .type("#jform_name", "SuperUser")

  //click submit//3.9
  // .click(".validate") //success
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > FORM:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#member-profile > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)") //fail

  //click submit //3.5
  // .click(".btn-primary span")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > FORM:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")
  // .click("#member-profile > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")

  //fix the broken action in 3.8.0 for clicking submit buttion 
  // .click("#member-profile > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  //fix the broken action in 3.9.0 for clicking submit buttion
  // .click("#member-profile > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")


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


// "use strict";
// var Nightmare = require("nightmare");
// var nightmare = Nightmare({
//   show: true
// });

// nightmare
//   // Visit login page
//   .goto("http://localhost:8888/Joomla3_5/Joomla_3.5.0-Stable-Full_Package/") //version 3.5.0    
//   .goto("http://localhost:8888/Joomla/")
//   .type("#modlgn-username", "admin")
//   .type("#modlgn-passwd", "123456")
//   .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

//   // click user menu Your Profile
//   // .click("[href=\"\\/Joomla\\/index\\.php\\/your-profile\"]")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")
//   .click("#aside > DIV:nth-child(3) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")

//   // .type("#jform_name", "SuperUser")

//   //click submit
//   // .click(".validate")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > FORM:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")
//   .click("#member-profile > DIV:nth-child(4) > DIV:nth-child(1) > BUTTON:nth-child(1)")


//   // End test
//   .end()
//   // Execute commands
//   .then(function () {
//     console.log("Done!")
//   })
//   // Catch errors
//   .catch(function (err) {
//      console.log(err)
//    })
//   