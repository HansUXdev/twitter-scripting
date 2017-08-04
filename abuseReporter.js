// "use strict";
var Nightmare = require("nightmare");
// var goto = require("nightmare").goto();
require('nightmare-iframe-manager')(Nightmare);

// var twitterSignIn = require("./twitterSignIn");

// require your user and password
// rename setting-example.js and add your user info
var settings  = require('./settings.js');


var nightmare = Nightmare({
  show: true,
  typeInterval: 200,
  pollInterval: 50,
  webSecurity: false
});


// because his tweets are dangerously unpresidential...
var target = "https://twitter.com/realDonaldTrump";

// set to true if you want to block him afterwards
var block = false;




function Tweet(TW_USER, TW_PASS){
  nightmare

  // call the twitterSignIn(user,pass)
    // twitterSignIn(user,pass)

  // Sign in
  .goto('https://twitter.com/login/')
    .insert('.js-username-field.email-input.js-initial-focus[name="session[username_or_email]"]', TW_USER)
    .insert(".js-password-field[name='session[password]']", TW_PASS)
    .click('#page-container > div > div.signin-wrapper > form > div.clearfix > button')
    .wait(2000)
  // Goto the targets page
  .goto(target).wait(1000)
    .mouseover('.IconContainer.js-tooltip').wait(500)
    .click(".IconContainer.js-tooltip").wait(500)
    //click the report button
    .mouseover('.report-link.js-actionReport').wait(500)
    .click(".report-link.js-actionReport").wait(500)

    // this is in an iframe... be very careful
    .enterIFrame('#new-report-flow-frame').wait(500)
      .mouseover('#abuse-btn').wait(500)
      .click("#abuse-btn").wait(500)
    .exitIFrame().wait(500)
    .click("#report-flow-button-next").wait(500)

    // 2nd set of options
      // Options are:
      // #disrespectful-btn
      // #harassing-btn // this one has more options
      // #private-info-btn
      // #hateful-btn
      // #violence-btn
      // #self-harm-btn
    .enterIFrame('#new-report-flow-frame').wait(500)
      .click("#disrespectful-btn").wait(500)
    .exitIFrame().wait(500)
    .click("#report-flow-button-next").wait(500)
    .mouseover('.new-report-flow-done-button').wait(500)
    
    // if you want to block him
      // .enterIFrame('#new-report-flow-frame').wait(1000)
      //   .click("#block-btn").wait(1000)
      // .exitIFrame().wait(1000)

    // comment the line below out if you
    .click(".new-report-flow-done-button").wait(500)

  // wait a little bit to see if everything worked...
  .wait(2000)
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })

  .catch(function (err) {
     console.log(err)
   })
};


// Tweet(user,pass);
Tweet(settings[1].name,settings[1].pass);

