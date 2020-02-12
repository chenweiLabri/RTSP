"use strict";

var Nightmare = require("nightmare");
// var should = require("chai").should();
// var expect = require("chai").expect;

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle-3.4.0/")
  // .goto("http://localhost:8888/moodle-3.4.5/")
  // .goto("http://localhost:8888/moodle-3.5.0/")
  // .goto("http://localhost:8888/moodle-3.6.0/")
  .goto("http://localhost:8888/moodle-3.6.3/")

  // .click("#yui_3_17_2_1_1553508179757_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  
  .type("#username", "admin")
  .type("#password", "ChenWei!123")
  .click("#loginbtn")
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