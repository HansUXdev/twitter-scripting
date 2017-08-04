"use strict";
var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true,
  typeInterval: 200,
  pollInterval: 50
});

var targets = "@robbatron ";
var message = targets+"are you showing off #nightmareJS in class?";

var settings  = require('./settings.js');


function Tweet(TW_USER,TW_PASS,message){
  nightmare
  //login
  .goto('https://twitter.com/login/')
    .insert('.js-username-field.email-input.js-initial-focus[name="session[username_or_email]"]', TW_USER)
    .insert(".js-password-field[name='session[password]']", TW_PASS)
    .click('#page-container > div > div.signin-wrapper > form > div.clearfix > button')
  // open the tweet panel
    .wait("#global-new-tweet-button")
    .click("#global-new-tweet-button") 
    // tweets "hello"
    .wait("#tweet-box-global")
    .type('#tweet-box-global', message)
    // click to send
    .click("#global-tweet-dialog-dialog > div.modal-content > div.modal-tweet-form-container > form > div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton.tweet-button > button > span.button-text.tweeting-text")


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


Tweet(settings[0].name,settings[0].pass,message);

