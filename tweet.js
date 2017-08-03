"use strict";
var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true,
  typeInterval: 200,
  pollInterval: 50
});

var user = "<YOUR_USERNAME>";
var pass = "<YOUR_PASSWORD>";
var targets = "@Breadstickguy ";
var message = targets+"whats up?";

var users = [
  {
    name: "<YOUR_USERNAME>",
    pass: "<YOUR_PASSWORD>",
    message: "now to loop through the function..."
  },
  {
    name: "<YOUR_USERNAME>",
    pass: "<YOUR_PASSWORD>",
    message: "second iteration..."
  }
];

function Tweet(user,pass,message){
  nightmare
  // Visit Home page
  .goto("https://twitter.com/")
  // Login
    // Click the login button
    .wait(500)
    .click("a.js-login")

    // Click the user name button, then type the user name
    .wait(1000)
    .insert("input.js-signin-email", user)

    // Click the password name button, then type the password name
    .wait(1000)
    .insert("input[type=password][placeholder=Password]", pass)
    // Click the submit button to login
    .wait(1000)
    .click("input.submit.js-submit[type=submit]")

  // Send Tweet to the target
    .wait(2000)
    .click(".js-global-new-tweet")
    .wait(2000)
    // name="tweet"
    .insert(".tweet-box ", message)
    .wait(1000)

  // click to send
    .wait(2000)
    .click("#global-tweet-dialog-dialog > div.modal-content > div.modal-tweet-form-container > form > div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton.tweet-button > button > span.button-text.tweeting-text")
    .wait(1000)


  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })

  .catch(function (err) {
     console.log(err)
   })
};


Tweet(user,pass,message);

