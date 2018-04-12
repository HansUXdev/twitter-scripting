// "use strict";
var Nightmare = require("nightmare");
require('nightmare-iframe-manager')(Nightmare);

// require your user and password
// rename setting-example.js and add your user info
var settings  = require('./settings.js');


var nightmare = Nightmare({
  show: true,
  // typeInterval: 200,
  // pollInterval: 50,
  webSecurity: false
});


// because his tweets are dangerously unpresidential...
var target = "https://twitter.com/realDonaldTrump";

// set to true if you want to block him afterwards
var block = false;


// rename setting-example.js and add your user info
var settings  = require('./setup-example.js');

var test = "ovyNoBt-01";
var test2 = "auot toui";


signupTwitterUser(settings[0].firstname,settings[0].lastname,test,settings[0].user,settings[0].pass);

function signupTwitterUser(TW_FIRSTNAME,TW_LASTNAME,TW_Contact,TW_USER, TW_PASS){
  nightmare
  .cookies.clearAll()
  // register a fake email
  .goto('https://service.gmx.com/registration.html')

    .enterIFrame('[title*="recaptcha"]').wait(500)
      .wait("#recaptcha-anchor").wait(500)
      .mouseover('#recaptcha-anchor').wait(500)
      .click('#recaptcha-anchor')
    .exitIFrame().wait(500)


    // .insert('.userdata-firstname > .InputText > .Text > input', TW_FIRSTNAME)

    // .click('.userdata-lastname > .InputText > .Text > input')
    // .insert('.userdata-lastname > .InputText > .Text > input', TW_LASTNAME)

    // .click('.Required.userdata-gender .InputText select > select[value="MALE"]')

    // DOB
      // .click('.userdata-birthdate .MonthPos')
      // .click('.userdata-birthdate .MonthPos option[value="1"]')

    .wait(2000)
    // .insert('input#email', TW_Contact)
    // .insert('input#password', TW_PASS)

  // Sign in
  // .goto('https://twitter.com/signup')
  //   .wait("input#full-name")
  //   .insert('input#full-name', TW_NAME)
  //   .insert('input#email', TW_Contact)
  //   .insert('input#password', TW_PASS)
  //   // .click('.use-cookie-personalization')
  //   .click('#submit_button')
  // after this point you are registered
  // .goto('https://twitter.com/account/add_username')
    // .wait("#sms-phone-create-form .skip-link")
    // .click('#sms-phone-create-form .skip-link')
    // .insert('.textbox > .prompt.name > #full-name', TW_PASS)
    // .click('#page-container > div > div.signin-wrapper > form > div.clearfix > button')






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





