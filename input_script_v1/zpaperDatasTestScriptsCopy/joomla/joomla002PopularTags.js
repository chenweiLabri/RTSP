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
  
  // .goto("http://localhost:8888/Joomla/")  
  .type("#modlgn-username", "admin")
  .type("#modlgn-passwd", "123456")
  .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //version3.5 click Popular Tags
  // .click(".tagspopular [href]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  // .click("#aside > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)") 

  //version3.5 click
  // .click(".cat-list-row0 [href]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > FORM:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > H3:nth-child(1) > A:nth-child(1)")
  // .click("#adminForm > UL:nth-child(2) > LI:nth-child(1) > H3:nth-child(1) > A:nth-child(1)")


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


////version 3.9
// "use strict";
// var Nightmare = require("nightmare");
// var nightmare = Nightmare({
//   show: true
// });

// nightmare
//   // Visit login page
//   .goto("http://localhost:8888/Joomla/")
//   .type("#modlgn-username", "admin")
//   .type("#modlgn-passwd", "123456")
//   .click("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)")

//   // click Popular Tags => joomla
//   // .click("#aside > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
//   .click(".tagspopular [href]")

//   //click Getting Started in content 
//   // .click("[itemtype=\"http\\:\\/\\/schema\\.org\\/ItemList\"] [itemprop=\"url\"]")
//   // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > MAIN:nth-child(1) > DIV:nth-child(3) > FORM:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > H3:nth-child(1) > A:nth-child(1)")
//   .click("#adminForm > UL:nth-child(2) > LI:nth-child(1) > H3:nth-child(1) > A:nth-child(1)")

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