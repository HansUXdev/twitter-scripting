// "use strict";
var Nightmare = require("nightmare");
// var goto = require("nightmare").goto();
require('nightmare-iframe-manager')(Nightmare);

// require your user and password
// rename setting-example.js and add your user info
var settings  = require('./settings.js');


var nightmare = Nightmare({
  show: true,
  typeInterval: 200,
  pollInterval: 50,
  webSecurity: false
});


const waitTime = 2000;


function GDTest(GD_USER, GD_PASS){
  nightmare

  // Sign in
  .goto('https://sso.godaddy.com/?realm=idp&path=%2Fproducts&app=account')
    .wait(waitTime)
    .insert('#username-input .login-input-container input.username-input.form-control', GD_USER).wait(waitTime)
    .insert('#password-input .login-input-container input#password', GD_PASS).wait(waitTime)
    .click("#submitBtn").wait(waitTime)
  
  // check the products pags
  .goto('https://account.godaddy.com/products/').wait(waitTime)
  // go to gate way
  .goto('https://gateway.godaddy.com/').wait(waitTime)

  //// buy demo
    .goto('https://www.godaddy.com/email/professional-email').wait(waitTime*2).click('.btn-block.office365_tier0_036mo').wait('#userCount .product-quantity').click('input[value="office365_tier0_001mo"]') .click('#planConfigContinue')
  ////
  // check out process
  ////
      // select the dropdown and cycle through the selection
      .wait('.ux-select-dropdown').click('.dropdown.ux-select-dropdown')
        .click('.dropdown-menu.dropdown-menu-left a[value="1"]').wait(waitTime)
        .click('.dropdown-menu.dropdown-menu-left a[value="12"]').wait(waitTime)
        .click('.dropdown-menu.dropdown-menu-left a[value="24"]').wait(waitTime)
        .click('.dropdown-menu.dropdown-menu-left a[value="36"]').wait(waitTime)
    //// complete purchase
    .click('.purchase-btn button.btn-purchase')

  .wait(waitTime)
  
  //// Stay open
  // .end()


  // Execute commands to scrap data
  .then(function () {
    console.log("Done!")
  })

  .catch(function (err) {
     console.log(err)
   })
};


// Tweet(user,pass);
GDTest(settings[2].name,settings[2].pass);

