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


function Tweet(GD_USER, GD_PASS){
  nightmare

  // Sign in
  .goto('https://sso.godaddy.com/?realm=idp&path=%2Fproducts&app=account')
    .wait(waitTime)
    .insert('#username-input .login-input-container input.username-input.form-control', GD_USER).wait(waitTime)
    .insert('#password-input .login-input-container input#password', GD_PASS).wait(waitTime)
    .click("#submitBtn").wait(waitTime)
  
    .goto('https://cart.godaddy.com/go/cart#/')
        .click('.empty-cart-button').wait(waitTime)
        .click('.modal-body .btn-confirm-emptycart')

  .wait(waitTime)
  
  //// Stay open
  // .end()


  // Execute commands to scrap data
  .then(function () {
    console.log("The cart is now empty!")
  })

  .catch(function (err) {
     console.log(err)
   })
};


// Tweet(user,pass);
Tweet(settings[2].name,settings[2].pass);

