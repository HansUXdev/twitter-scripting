"use strict";
var Nightmare = require("nightmare");
   // var iframe = require('nightmare-iframe');
require('nightmare-iframe-manager')(Nightmare);

var nightmare = Nightmare({
  show: true,
  typeInterval: 200,
  pollInterval: 50,
  webSecurity: false
});


// because his tweets have the potential to literally 
// kill every human being on the planet...
var target = "https://twitter.com/realDonaldTrump";

var debug =false;

var user = "<YOUR_USERNAME>";
var pass = "<YOUR_PASSWORD>";


function Tweet(user,pass,message){
  nightmare
  // Sign in
  .goto("https://twitter.com/")
    .wait(500)
    .click("a.js-login")
    .wait(1000)
    .insert("input.js-signin-email", user)
    .wait(500)
    .insert("input[type=password][placeholder=Password]", pass)
    // Click the submit button to login
    .wait(500)
    .click("input.submit.js-submit[type=submit]")
    .wait(1500)
  // Goto the targets page
  .goto(target)
    .wait(2000)
    .mouseover('.IconContainer.js-tooltip').wait(1500)
    .click(".IconContainer.js-tooltip").wait(100)
    //click the report button
    .mouseover('.report-link.js-actionReport').wait(1500)
    .click(".report-link.js-actionReport").wait(500)

    // this is in an iframe... be very careful
    // th
    .enterIFrame('#new-report-flow-frame').wait(1000)
      .mouseover('#abuse-btn').wait(1000)
      .click("#abuse-btn").wait(1000)
    .exitIFrame().wait(1000)
    .click("#report-flow-button-next").wait(1000)

    // 2nd set of options
    .enterIFrame('#new-report-flow-frame').wait(1000)
      // Options are:
      // #disrespectful-btn
      // #harassing-btn
      // #private-info-btn
      // #hateful-btn
      // #violence-btn
      // #self-harm-btn
      .mouseover('#disrespectful-btn').wait(1000)
      .click("#disrespectful-btn").wait(1000)
    .exitIFrame().wait(1000)
    .mouseover('#report-flow-button-next').wait(1000)
    .click("#report-flow-button-next").wait(1000)
    .mouseover('.new-report-flow-done-button').wait(1000)
    .click(".new-report-flow-done-button").wait(1000)

  // wait a little bit to see if everything worked...
  .wait(5000)
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })

  .catch(function (err) {
     console.log(err)
   })
};


Tweet(user,pass);

